package com.log;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // <-- Add this line za auth
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; // <-- Add this line za firestore
import com.oblador.vectoricons.VectorIconsPackage;//<-- Add this for vector icons
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new PickerPackage(),
          new RNFirebasePackage(),
          new RNGestureHandlerPackage(),
          new RNFirebaseAuthPackage(), // <-- Add this line za auth
          new RNFirebaseFirestorePackage(), // <-- Add this line za firestore
          new VectorIconsPackage() //<-- Add this for vector icons
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
