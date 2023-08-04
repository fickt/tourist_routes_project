module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, { "extensions": ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-runtime': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'off'
    }
}
