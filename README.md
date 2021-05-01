# **React Native Starter Kit** ⚛

A react native starter kit build with [React Native Elements](https://reactnativeelements.com/)

> ## Table of content

1. [Development Tools](#development-tools)
    - [Android](#android-development-environment)
        - [Installing Android Studio](#download-and-install-android-studio)
        - [Installing Android SDK](#install-the-android-sdk)
        - [Configure PATH variables](#configure-the-android_home-environment-variable)
    - [iOS](#ios-development-environment)
        - [XCode & Cocoapods](#xcode-&-cocoapods)
          1. [Command Line Tools](#command-line-tools)
          2. [Installing iOS simulator](#installing-an-ios-simulator-in-xcode)
          3. [Cocoapods](#cocoapods)
    - [Editor Tools](#editor-Tools)
    - [React Native Command Line Interface](#react-native-command-line-interface)
2. [Building a development version](#building-a-development-version)
    - [Android](#android-development-mode)
    - [iOS](#ios-development-mode)
    - [Addressing development issues](#development-issues)
3. [Building a production version](#building-a-production-version)
    - [Android](#android-production)
    - [iOS](#ios-production)
4. [Contribution](#contribution)
5. [Maintenance](#maintenance)

> ## Devlopment tools

***For ios production you will need a macintosh hardware.*** 💻

*[Please follow the guideline provided in reactnative.dev to setup the environment](https://reactnative.dev/docs/environment-setup)*


 * [Node(8.3 or newer)](https://nodejs.org/en/), [Watchman](https://facebook.github.io/react-native/docs/getting-started.html#node-watchman)
 & [Yarn](https://yarnpkg.com/en/)

 * You can use [Node Version Manager](https://github.com/nvm-sh/nvm) to switch node version. [Please follow this guide to install nvm on your OS](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png)

    ```bash
    nvm use
    ```

 * Download and install [OpenJDK](https://openjdk.java.net/) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager. You may also [Download and install Oracle JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if desired.

    💡<span style="color:yellow; font-style: italic;">
    You can use <a :href="https://sdkman.io/">sdkman</a> to install and manage your Java version(s).
    </span>


### Android development environment
-----

1. #### **[Download and Install Android Studio](https://developer.android.com/studio/index.html)**.
    
    While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

    - `Android SDK`
    - `Android SDK Platform`
    - `Android Virtual Device`
    - For macOS if you are not already using Hyper-V: Performance (Intel ® HAXM) ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

    Then, click "Next" to install all of these components.

    <span style="color:yellow">
    If the checkboxes are grayed out, you will have a chance to install these components later on.
    </span>

    Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. #### **Install the Android SDK**

    Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

    To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

    ![getting-started-android-macos][GettingStartedAndroidMacOS]

    [GettingStartedAndroidMacOS]: https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png "Getting Started With Android in MacOS"

    <span style="color:yellow">
    The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
    </span>

    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

      - `Android SDK Platform 29`
      - `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

    Finally, click "Apply" to download and install the Android SDK and related build tools.

  3. #### **Configure the ANDROID_HOME environment variable**

      The React Native tools require some environment variables to be set up in order to build apps with native code.

      Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

      ```bash
      export ANDROID_HOME=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_HOME/emulator
      export PATH=$PATH:$ANDROID_HOME/tools
      export PATH=$PATH:$ANDROID_HOME/tools/bin
      export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```

      Type `source $HOME/.bash_profile` for bash or `source $HOME/.zprofile` to load the config into your current shell. Verify that `ANDROID_HOME` has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running ```echo $PATH```.

      </br>
      <span style="color:yellow">
        Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
      </span>

### iOS development environment
-----
  
> #### **Xcode & CocoaPods**

The easiest way to install Xcode is via the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 9.4 or newer.

- #### **Command Line Tools**

    You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

    ![getting-started-xcode-cli-tools][GettingStartedXcodeCommandLineTools]

    [GettingStartedXcodeCommandLineTools]: https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png "Getting Started With XCode Command Line Tools"

- #### **Installing an iOS Simulator in Xcode**

    To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

- #### **CocoaPods**

    [CocoaPods](https://cocoapods.org/) is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, or with [homebrew](https://brew.sh/) as well.

    Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)

    ```zsh
      sudo gem install cocoapods
    ```
## Editor Tools
-----
***Highly recommend to use [VS Code](https://code.visualstudio.com/) for developing javascript/typescript code with following extensions enabled for better developer experience.***

  - [VS Code ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  - [Prettier Formatter for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<span style="color:yellow">
vscode will suggest installing the plugins recommended.
</span>

If you would like to manually install the plugins you can use the code executable. If you have code in your `PATH`, you can run the following command:

```
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
```

## React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, its recommended that you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

3. Update the .env with necessary configurations

> ## Building a development version

### Android Development Mode
-----

To create a development version debuggable with a device or emulator,

   - If you're using an external device, enable USB debugging for a device connected.
   
   - Start the Metro server
   
   ```bash
      yarn start
   ```

   - Open a new terminal inside the project directory & run the following command

  ```bash
      yarn android
  ```


### iOS Development Mode
-----

> ### **Running on Simulator**

  - Start the Metro server

  ```zsh
    yarn start
  ```

  - Open a new terminal inside the project directory & run the following command.

  ```zsh
    yarn ios
  ```

  You can specify the device the simulator should run with the `--simulator` flag, followed by the device name as a string. The default is "iPhone 11". If you wish to run your app on an iPhone SE, run `yarn ios --simulator="iPhone SE"`.

The device names correspond to the list of devices available in Xcode. You can check your available devices by running `xcrun simctl list devices` from the console.

> ### **Running on Device** 📱
  
  1. Plug in your device via USB

      Connect your iOS device to your Mac using a USB to Lightning cable. Navigate to the `ios` folder in your project, then open the `.xcodeproj` file, or if you are using CocoaPods open `.xcworkspace`, within it using Xcode.

      If this is your first time running an app on your iOS device, you may need to register your device for development. Open the Product menu from Xcode's menubar, then go to Destination. Look for and select your device from the list. Xcode will then register your device for development.

  2. Configure code signing

      Register for an [Apple developer account](https://developer.apple.com/) if you don't have one yet.

      Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).

      Repeat this step for the **Tests** target in your project.
      
      ![running-on-device-code-sign-in][RunningOnDeviceCodeSignIn]

      [RunningOnDeviceCodeSignIn]: https://reactnative.dev/assets/images/RunningOnDeviceCodeSigning-daffe4c45a59c3f5031b35f6b24def1d.png "Running on ios device after code sign in"

  3. Build and Run your app

      If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices pane (⇧⌘2). You can now press the Build and run button (⌘R) or select Run from the Product menu. Your app will launch on your device shortly.

      ![xcode-debugger-menu][XcodeDebuggerMenu]

      [XcodeDebuggerMenu]: https://i.ibb.co/zfvrFNP/image.png "Xcode debugger menu"

      You should see the app running in the iOS Simulator shortly.
### Development issues

If any issues related to development are raised please document them in [Developer's Doc](./docs/DEVELOPER.md)

> ## Building a production version

### Android Production
-----
  To create a signed release you will need to:

   - Create a keystore. Follow the `keytool` instructions here: https://facebook.github.io/react-native/docs/signed-apk-android.html#generating-a-signing-key

   - Update the ```.env``` with Major, Minor, Patch version values. 

   - Run the following command to build a signed `.apk` file

  ```bash
    yarn android:build
  ```
  This will create a univeral .apk file that can be shared among peers.

  To create a release build to the Google Play Store you will need make an AAB ([Application App Bundle](https://developer.android.com/guide/app-bundle)).
  
  You can run the following command to do so.

  ```bash
    yarn android:build-release
  ```

  For more information in depth read the [official react native guide on build releases](https://reactnative.dev/docs/signed-apk-android).
### iOS Production
-----
  
1. **Enable App Transport Security**

App Transport Security is a security feature introduced in iOS 9 that rejects all HTTP requests that are not sent over HTTPS. This can result in HTTP traffic being blocked, including the developer React Native server. ATS is disabled for localhost by default in React Native projects in order to make development easier.

You should re-enable ATS prior to building your app for production by removing the `localhost` entry from the `NSExceptionDomains` dictionary and setting `NSAllowsArbitraryLoads` to `false` in your `Info.plist` file in the `ios/` folder. You can also re-enable ATS from within Xcode by opening your target properties under the Info pane and editing the App Transport Security Settings entry.

<span style="color:yellow">
If your application needs to access HTTP resources on production, see <a :href="http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/">this post</a> to learn how to configure ATS on your project.
</span>

<br>
<br>

2. **Configure release scheme**

Building an app for distribution in the App Store requires using the `Release` scheme in Xcode. Apps built for `Release` will automatically disable the in-app Developer menu, which will prevent your users from inadvertently accessing the menu in production. It will also bundle the JavaScript locally, so you can put the app on a device and test whilst not connected to the computer.

To configure your app to be built using the `Release` scheme, go to **Product** → **Scheme** → **Edit Scheme**. Select the **Run** tab in the sidebar, then set the Build Configuration dropdown to `Release`.

![configure-ios-release-scheme][ConfigureiOSReleaseScheme]

[ConfigureiOSReleaseScheme]: https://reactnative.dev/assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png "Configure iOS Release Scheme"


**Pro Tips**

As your App Bundle grows in size, you may start to see a blank screen flash between your splash screen and the display of your root application view. If this is the case, you can add the following code to `AppDelegate.m` in order to keep your splash screen displayed during the transition.

```zsh
  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"
  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
  UIViewController *vc = [sb instantiateInitialViewController];
  rootView.loadingView = vc.view;
```

The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase `Bundle React Native code and images`:

```zsh
 if [ "${CONFIGURATION}" == "Debug" ]; then
  export SKIP_BUNDLING=true
 fi
```

3. **Build app for release**

You can now build your app for release by tapping ⌘B or selecting **Product** → **Build** from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store.

<span style="color:yellow">
You can also use the React Native CLI to perform this operation using the option --configuration with the value Release (e.g. npx react-native run-ios --configuration Release).
</span>
<br>
<br>

> ## Contribution

Please refer the [contribution guideline](./CONTRIBUTION.md).

> ## Maintenance

Please refer the [maintenance document](./docs/MAINTENANCE.md) for any concerns.
