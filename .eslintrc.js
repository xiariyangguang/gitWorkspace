/**
 * @file .eslintrc.js
 * @description PC toc 业务下的 ts 配置
 */

module.exports = {
    root: true,
    overrides: [
        {
            files: ['src/**/*.ts'],
            extends: ['@baidu/eslint-config-sfe-typescript/config/ts-pc']
        }
    ],
    parserOptions: {
        tsconfigRootDir: __dirname // 这个配置项值为 tsconfig.json 所在目录， 可能需要各个代码库按需修改
    }
};
