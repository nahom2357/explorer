'use client';

import { forwardRef, useColorMode } from '@chakra-ui/react';
import * as React from 'react';

import { Text, TextProps } from './Text';

export * from './Text';

export const Caption = forwardRef<TextProps, 'small'>((props, ref) => (
  <Text
    style={{ userSelect: 'none' }}
    color={`textCaption.${useColorMode().colorMode}`}
    fontSize="12px"
    lineHeight="16px"
    display="inline-block"
    ref={ref}
    {...props}
  />
));

export const Title = forwardRef<TextProps, 'span'>(({ as, ...props }, ref) => (
  <Text
    ref={ref}
    as={as}
    display="inline-block"
    color={`textTitle.${useColorMode().colorMode}`}
    fontWeight={500}
    {...props}
  />
));

export const Pre = forwardRef<TextProps, 'pre'>(({ as = 'pre', ...props }, ref) => (
  <Text
    display="inline"
    fontFamily={`"Fira Code", monospace`}
    bg={`bg.${useColorMode().colorMode}`}
    borderRadius="8px"
    borderWidth="1px"
    fontSize="12px"
    boxShadow="low"
    px="8px"
    py="8px"
    color={'textBody'}
    ref={ref}
    {...props}
    style={{
      wordBreak: 'break-word',
    }}
  />
));
