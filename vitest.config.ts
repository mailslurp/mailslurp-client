// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    include: ['**/*.{test,spec,use}.{ts,tsx}'],
    reporters: [
      'default',
      'junit',
    ],
    setupFiles: ['dotenv/config'],
    timeout: 120000, // 120 seconds
    coverage: {
      provider: 'istanbul', // Default coverage provider
      enabled: true, // Enable coverage collection
      include: ['dist/**/*.js'], // Files to collect coverage from
      reporters: ['text', 'html'], // Coverage reporters
    },
  },
})