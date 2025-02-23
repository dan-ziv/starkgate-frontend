import {useMemo} from 'react';

import Strings from '../config/strings';
import {getPropertyPath} from '../utils';

export const useTranslation = path => useMemo(() => getTranslation(path), [path]);

export const useContainersTranslation = path => {
  return useTranslation(chainPath('containers', path));
};

export const useHeaderTranslation = () => {
  return useContainersTranslation('header');
};

export const useFooterTranslation = () => {
  return useContainersTranslation('footer');
};

export const useMenusTranslation = path => {
  return useTranslation(chainPath('menus', path));
};

export const useAccountTranslation = path => {
  return useMenusTranslation(chainPath('account', path));
};

export const useSelectTokenTranslation = path => {
  return useMenusTranslation(chainPath('selectToken', path));
};

export const useTransferTranslation = path => {
  return useMenusTranslation(chainPath('transfer', path));
};

export const useLoginTranslation = path => {
  return useMenusTranslation(chainPath('login', path));
};

export const useToastsTranslation = path => {
  return useTranslation(chainPath('toasts', path));
};

export const useCompleteTransferToastTranslation = () => {
  return useToastsTranslation('completeTransfer');
};

export const usePendingTransferToastTranslation = () => {
  return useToastsTranslation('pendingTransfer');
};

export const useModalsTranslation = path => {
  return useTranslation(chainPath('modals', path));
};

export const useTransferProgressModalTranslation = () => {
  return useModalsTranslation('transferProgress');
};

export const useTransactionSubmittedModalTranslation = () => {
  return useModalsTranslation('transactionSubmitted');
};

export const useOnboardingModalTranslation = () => {
  return useModalsTranslation('onboarding');
};

export const useScreensTranslation = path => {
  return useTranslation(chainPath('screens', path));
};

export const useFaqTranslation = () => {
  return useScreensTranslation('faq');
};

export const useTermsTranslation = () => {
  return useScreensTranslation('terms');
};

export const useTransferLogContainerTranslation = () => {
  return useAccountTranslation('transferLogContainer');
};

export const useTransferLogTranslation = () => {
  return useAccountTranslation('transferLogContainer.transferLog');
};

const chainPath = (basePath, constitutivePath) => {
  return constitutivePath ? `${basePath}.${constitutivePath}` : basePath;
};

const getTranslation = path => getPropertyPath(Strings, path);
