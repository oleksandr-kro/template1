import React from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, fonts, layout, shadow } from '../../../../assets/styles';
import { Icon } from '../../basic';
import { normalized } from '../../../../utils';

// For status bar indentation
const statusBarHeight = getStatusBarHeight();

const styles = StyleSheet.create({
  indentation: {
    height: statusBarHeight,
    backgroundColor: colors.green.default,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green.default,
  },

  center: {
    flex: 1,
    alignItems: 'center',
  },

  top: {
    paddingVertical: layout.paddings.default,
  },

  bottom: {
    position: 'absolute',
    top: '100%',
    width: '100%',
  },

  // eslint-disable-next-line react-native/no-color-literals
  transparent: {
    backgroundColor: 'transparent',
  },

  light: {
    backgroundColor: colors.white,
  },

  sticked: {
    paddingTop: layout.paddings.narrow,
    paddingBottom: layout.paddings.thin,
  },

  shadowContainer: {
    position: 'absolute',
    width: '100%',
    height: normalized(20),
    bottom: normalized(20),
    zIndex: 0,
  },

  shadow: {
    height: '100%',
    backgroundColor: colors.black.default,
    ...shadow.default,
  },

  border: {
    borderBottomWidth: normalized(1),
    borderColor: colors.gray.lighter2,
  },

  title: {
    ...fonts.size16,
    ...fonts.bold,
    color: colors.white,
  },

  titleLight: {
    color: colors.black.default,
  },
});

const getSubComponent = (component, type, strict) => {
  if (typeof component?.type === 'function' && !strict) return component;
  if (component instanceof Object) return component[type];
  return null;
};

const Shadow = ({ visible }) => (
  <View style={[styles.shadowContainer, visible && { bottom: 0 }]}>
    <View style={styles.shadow} />
  </View>
);

const Title = ({ title, width, light, collapsed }) => {
  const [containerLayout, setContainerLayout] = React.useState({});

  const { width: containerWidth = 0, x: containerLeft = 0 } = containerLayout;
  const compensation = 2 * containerLeft + containerWidth - width;

  return (
    <View
      style={styles.center}
      onLayout={
        //
        ({ nativeEvent: { layout } }) => setContainerLayout(layout)
      }
    >
      {!collapsed && (
        <Text
          numberOfLines={1}
          style={[styles.title, light && styles.titleLight]}
        >
          {/* width compensations to center the text */}
          {compensation < 0 && (
            <Text style={{ letterSpacing: -compensation }}>{'\u200B'}</Text>
          )}
          {title}
          {compensation > 0 && (
            <Text style={{ letterSpacing: +compensation }}>{'\u200B'}</Text>
          )}
        </Text>
      )}
    </View>
  );
};

const Header = React.memo(({ scene, previous, navigation }) => {
  const { descriptor, progress, route } = scene;
  const { options } = descriptor;
  const {
    title = route.name,
    noTitle,
    transparent,
    light = false,
    sticked = false,
    collapsed = false,
    headerCenter,
    headerLeft,
    headerRight,
    headerBottomLeft,
    headerBottomRight,
  } = options || {};

  //
  const { width } = useWindowDimensions();

  //
  const sceneProgress = Animated.add(progress.current, progress.next || 0);
  const opacity = sceneProgress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  const bottomed = headerBottomLeft || headerBottomRight;

  //
  return (
    <Animated.View style={{ opacity }}>
      <Text>123545</Text>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={light ? 'dark-content' : 'light-content'}
      />

      {/* Status bar indentation */}
      <View
        style={[
          styles.indentation,
          light && styles.light,
          transparent && styles.transparent,
        ]}
      />

      {/* Header container */}
      <View>
        <View style={collapsed && { top: '-100%' }}>
          {/* Top container' shadow */}
          {!transparent && <Shadow visible={collapsed || sticked} />}

          {/* Top container */}
          <View
            style={[
              styles.row,
              styles.top,
              light && [styles.light, bottomed && styles.border],
              transparent && styles.transparent,
              sticked && styles.sticked,
            ]}
          >
            {(headerLeft || previous) && (
              <View>
                <View
                  style={[
                    { paddingLeft: layout.paddings.default },
                    collapsed && { right: '100%' },
                  ]}
                >
                  {headerLeft !== undefined ? (
                    getSubComponent(headerLeft, 'top')
                  ) : (
                    <TouchableOpacity onPress={navigation.goBack}>
                      <Icon
                        name={light ? 'Check' : 'Check'}
                        height={layout.icons.large}
                        width={layout.icons.large}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}

            {headerCenter ? (
              <View style={styles.center}>{!collapsed && headerCenter}</View>
            ) : (
              !noTitle && (
                <Title
                  title={title}
                  width={width}
                  light={light}
                  collapsed={collapsed}
                />
              )
            )}

            {headerRight && (
              <View>
                <View
                  style={[
                    { paddingRight: layout.paddings.default },
                    collapsed && { left: '100%' },
                  ]}
                >
                  {getSubComponent(headerRight, 'top')}
                </View>
              </View>
            )}
          </View>

          {/* Bottom container */}
          {bottomed && (
            <View style={styles.bottom}>
              {/* Bottom container shadow */}
              <Shadow visible={collapsed || sticked} />

              {/* Bottom content */}
              <View
                style={[
                  styles.row,
                  styles.light,
                  { padding: layout.paddings.default },
                ]}
              >
                {collapsed && getSubComponent(headerLeft, 'bottom', true)}
                {headerBottomLeft}

                <View style={styles.center} />

                {headerBottomRight}
                {collapsed && getSubComponent(headerRight, 'bottom', true)}
              </View>
            </View>
          )}
        </View>
      </View>
      <Text>123545</Text>

    </Animated.View>
  );
});

export default (props) => <Header {...props} />;
