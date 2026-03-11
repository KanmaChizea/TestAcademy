import { StyleSheet, View } from 'react-native';
import React from 'react';
import { mockUser } from '../../../data';
import { IconButton } from './IconButton';
import { Icons } from '../../../theme/icons';
import { COLORS } from '../../../theme/colors';
import { Spacer } from '../../shared/Spacer';
import { AppTextStyle, Typography } from '../../shared/Typography';
import { withOpacity } from '../../../util/formatters';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WelcomeHeader = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <IconButton icon={<Icons.Person />} size={48} borderWidth={2} />
      <Spacer width={16} />
      <View style={styles.text}>
        <Typography color={withOpacity(COLORS.white, 0.8)}>
          {'Welcome back,'}
        </Typography>
        <Typography
          textstyle={AppTextStyle.heading8}
          color={COLORS.white}
        >{`${mockUser.firstName} ${mockUser.lastName}`}</Typography>
      </View>
      <Spacer width={14} />
      <IconButton icon={<Icons.Search />} />
      <Spacer width={8} />
      <IconButton icon={<Icons.Bell />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
});
