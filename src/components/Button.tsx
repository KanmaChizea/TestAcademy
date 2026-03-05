import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { AppTextStyle, Typography } from './Typography';
import { COLORS } from '../theme/colors';

type Props = TouchableOpacityProps & {
  icon: React.ReactElement;
  text: string;
};

export const Button = ({ icon, text, disabled, style, ...props }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, disabled && styles.disabled, style]}
      disabled={disabled}
      {...props}
    >
      {icon}
      <Typography textstyle={AppTextStyle.bodyMediumBold} color={COLORS.white}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.slate800,
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: COLORS.grey400,
  },
});
