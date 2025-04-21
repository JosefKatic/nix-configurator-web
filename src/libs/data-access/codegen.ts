import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://config.internal.joka00.dev/api/graphql",
  documents: ["src/libs/data-access/src/lib/**/*.graphql"],
  generates: {
    'src/libs/data-access/src/lib/generated/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular'
      ],
      config: {
        addExplicitOverride: true
      }
    }
  }
};
export default config;
