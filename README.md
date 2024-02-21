# Angular Test with Jest

1. npm remove karma-jasmine-html-reporter karma-jasmine karma-coverage karma-chrome-launcher karma jasmine-core
2. npm install --save-dev jest jest-preset-angular @types/jest
3. Crear setup-jest.ts y ponerle la siguiente línea `import 'jest-preset-angular/setup-jest';`
4. Agregar en el package.json:

```
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```

5. Agregar en el tsconfig.json y tsconfig.spec.json

```
"types": [
  "jest",
  "mocha",
  "jasmine"
]
```

6. Agregar los siguientes scripts:

```
"test": "jest",
"test:watch": "jest --watchAll",
```