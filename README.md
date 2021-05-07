# Configuração LOCALHOST
- Necessário ter configurado e instalado o Android Studio assim como o React Native Cli.
- Necessário ter um smartphone ou emulador configurado
- Neste projeto foi utilizando somente Android para desenvolvimento e testes.

1. Clone o repositório `ioasys-react-native` na pasta *ioasys-react-native* em sua máquina

2. Vá até a pasta *ioasys-react-native*(root) e use o comando: `npm install` 
    - Irá instalar todas as dependências em *package.json*

3. Instalando o app e subindo no smartphone
* Use o comando: `npm run android`
  * Irá rodar o comando `script: { android }` em *package.json* que irá dar início a instalação do app no smartphone
* Caso falhe o anterior, outra opção é:
	* Usar o comando `npm run start`
	* Abrir outra guia do console e usar novamente o comando `npm run android`
* Comando auxiliar `npm run adb` para subir algumas portas localhost
* Comando auxiliar `npm run android:clean` para limpar o *gradlew* do android

# Bibliotecas utilizadas

* `@react-native-async-storage/async-storage`: Utilizada para guardar informações do header
* `@react-native-picker/picker`: Utilizada para exibir o picker do tipo da enterprise
* `@react-navigation/native`: Utilizada para o navigation
  * `@react-native-community/masked-view`: Necessária para o funcionamento do navigation
  * `@react-navigation/stack`: Necessária para o funcionamento do navigation
  * `react-native-gesture-handler`: Necessária para o funcionamento do navigation
  * `react-native-safe-area-context`: Necessária para o funcionamento do navigation
  * `react-native-screens`: Necessária para o funcionamento do navigation
* `axios`: Utilizada para fazer requisição na API
* `i18n-js`: Utilizada para JSON de textos fixos e possivelmente tradução
  * `@types/i18n-js`: Necessária para o funcionamento da `i18n-js`
* `react-native-elements`: Utilizada exibir ícone
  * `react-native-vector-icons`: Necessária para exibir ícone
* `redux`: Utilizada para armazenamento de State
* `react-redux`: Utilizada para armazenamento de State
* `redux-thunk`: Middleware para Actions assíncronas
* `eslint`: Configurações do ESLint para padronizar código
  * `@react-native-community/eslint-config`: Configurações do ESLint
  * `@typescript-eslint/eslint-plugin`: Configurações do ESLint
  * `@typescript-eslint/eslint-plugin`: Configurações do ESLint com typescript
  * `eslint-config-airbnb-typescript`: Configurações do ESLint
  * `eslint-config-prettier`: Configurações do ESLint com prettier
  * `eslint-config-airbnb-typescript`: Configurações do ESLint
  * `eslint-plugin-import`: Configurações do ESLint
  * `eslint-plugin-jsx-a11y`: Configurações do ESLint
  * `eslint-plugin-react`: Configurações do ESLint
  * `eslint-plugin-react-hooks`: Configurações do ESLint
* `prettier`: Padronização de código
* `jest`: Utilizada para criação de testes unitários em componentes
  * `@types/jes`: Necessário para o funcionamento do jest
  * `@testing-library/jest-native`: Necessário para testes em jest
  * `@testing-library/react-native`: Necessário para testes em react native components
  * `jsdom`: Necessário para o funcionamento do jest
# Utils

* Caso aconteça algum problema relacionado ao JDK do Android
  - [https://stackoverflow.com/questions/39010338/java-home-supplied-via-org-gradle-java-home-is-invalid-invalid-directory-us](https://stackoverflow.com/questions/39010338/java-home-supplied-via-org-gradle-java-home-is-invalid-invalid-directory-us)