import { integrationTest } from './_helpers';
import {
  CreateRulesetOptionsActionEnum,
  CreateRulesetOptionsScopeEnum,
  RulesetControllerApi,
  Configuration,
} from '../dist';

jest.setTimeout(120_000);
integrationTest('can use ruleset controller', async (mailslurp) => {
  const rule = await mailslurp.rulesetController.createNewRuleset({
    createRulesetOptions: {
      action: CreateRulesetOptionsActionEnum.ALLOW,
      scope: CreateRulesetOptionsScopeEnum.RECEIVING_EMAILS,
      target: '*',
    },
    inboxId: undefined,
    phoneId: undefined,
  });
  expect(rule).toBeTruthy();
  const rulesetController = new RulesetControllerApi(
    new Configuration({
      apiKey: process.env.API_KEY,
    })
  );
  await rulesetController.deleteRuleset({
    id: rule.id,
  });
});
