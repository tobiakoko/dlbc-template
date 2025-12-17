/**
 * Sanity Validation Helpers
 *
 * Reusable validation functions for schema fields
 */

import type { ValidationContext } from 'sanity';

/**
 * Validate URL format
 */
export const validateUrl = (value: string | undefined) => {
  if (!value) return true;

  try {
    new URL(value);
    return true;
  } catch {
    return 'Must be a valid URL';
  }
};

/**
 * Validate email format
 */
export const validateEmail = (value: string | undefined) => {
  if (!value) return true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) || 'Must be a valid email address';
};

/**
 * Validate phone number format
 */
export const validatePhone = (value: string | undefined) => {
  if (!value) return true;

  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(value) || 'Must be a valid phone number';
};

/**
 * Validate date is not in the past
 */
export const validateFutureDate = (value: string | undefined) => {
  if (!value) return true;

  const date = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today || 'Date must be in the future';
};

/**
 * Validate that a required reference exists
 */
export const validateReference = (value: any, context: ValidationContext) => {
  if (!value?._ref) {
    return 'Reference is required';
  }
  return true;
};

/**
 * Validate array has minimum items
 */
export const validateMinItems = (min: number) => (value: any[] | undefined) => {
  if (!value) return true;
  return value.length >= min || `Must have at least ${min} items`;
};

/**
 * Validate array has maximum items
 */
export const validateMaxItems = (max: number) => (value: any[] | undefined) => {
  if (!value) return true;
  return value.length <= max || `Must have no more than ${max} items`;
};

/**
 * Validate slug format
 */
export const validateSlug = (value: { current?: string } | undefined) => {
  if (!value?.current) return true;

  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return (
    slugRegex.test(value.current) ||
    'Slug must be lowercase letters, numbers, and hyphens only'
  );
};

/**
 * Validate hex color format
 */
export const validateHexColor = (value: string | undefined) => {
  if (!value) return true;

  const hexRegex = /^#[0-9A-Fa-f]{6}$/;
  return hexRegex.test(value) || 'Must be a valid hex color (e.g., #FF0000)';
};

/**
 * Conditional validation - field required if condition is met
 */
export const requiredIf = (
  condition: (parent: any) => boolean,
  message = 'This field is required'
) => {
  return (value: any, context: ValidationContext) => {
    const parent = context.parent as any;
    if (condition(parent) && !value) {
      return message;
    }
    return true;
  };
};

/**
 * Validate YouTube URL
 */
export const validateYouTubeUrl = (value: string | undefined) => {
  if (!value) return true;

  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  return youtubeRegex.test(value) || 'Must be a valid YouTube URL';
};

/**
 * Validate Vimeo URL
 */
export const validateVimeoUrl = (value: string | undefined) => {
  if (!value) return true;

  const vimeoRegex = /^(https?:\/\/)?(www\.)?vimeo\.com\/.+/;
  return vimeoRegex.test(value) || 'Must be a valid Vimeo URL';
};
