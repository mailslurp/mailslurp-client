'use strict';

var assert = require('assert');
var childProcess = require('child_process');
var fs = require('fs');
var os = require('os');
var path = require('path');

var projectRoot = path.resolve(__dirname, '..');
var temporaryDirectory = fs.mkdtempSync(
  path.join(os.tmpdir(), 'mailslurp-package-interop-')
);

function runNode(script, extension, consumerDirectory) {
  var scriptPath = path.join(consumerDirectory, 'smoke.' + extension);
  fs.writeFileSync(scriptPath, script);
  childProcess.execFileSync(process.execPath, [scriptPath], {
    cwd: consumerDirectory,
    stdio: 'inherit',
  });
}

try {
  var archiveName = childProcess
    .execFileSync(
      'npm',
      ['pack', '--silent', '--pack-destination', temporaryDirectory],
      { cwd: projectRoot, encoding: 'utf8' }
    )
    .trim()
    .split(/\r?\n/)
    .pop();
  assert(archiveName, 'npm pack did not return an archive name');

  childProcess.execFileSync(
    'tar',
    [
      '-xzf',
      path.join(temporaryDirectory, archiveName),
      '-C',
      temporaryDirectory,
    ],
    { stdio: 'inherit' }
  );

  var packedPackage = path.join(temporaryDirectory, 'package');
  assert(
    !fs.existsSync(path.join(packedPackage, 'test')),
    'The published SDK must not contain the private test package'
  );
  var consumerDirectory = path.join(temporaryDirectory, 'consumer');
  var consumerNodeModules = path.join(consumerDirectory, 'node_modules');
  fs.mkdirSync(consumerNodeModules, { recursive: true });
  fs.symlinkSync(
    packedPackage,
    path.join(consumerNodeModules, 'mailslurp-client'),
    'dir'
  );
  fs.symlinkSync(
    path.join(projectRoot, 'node_modules'),
    path.join(packedPackage, 'node_modules'),
    'dir'
  );

  runNode(
    "const assert = require('assert');\n" +
      "const packageExports = require('mailslurp-client');\n" +
      'const { MailSlurp } = packageExports;\n' +
      "assert.strictEqual(typeof MailSlurp, 'function');\n" +
      'assert.strictEqual(packageExports.default, MailSlurp);\n' +
      "assert(new MailSlurp({ apiKey: 'test-api-key' }));\n",
    'cjs',
    consumerDirectory
  );

  runNode(
    "import assert from 'assert';\n" +
      "import { MailSlurp } from 'mailslurp-client';\n" +
      "assert.strictEqual(typeof MailSlurp, 'function');\n" +
      "assert(new MailSlurp({ apiKey: 'test-api-key' }));\n",
    'mjs',
    consumerDirectory
  );

  console.log('Packed package CommonJS and native ESM checks passed');
} finally {
  fs.rmSync(temporaryDirectory, { force: true, recursive: true });
}
