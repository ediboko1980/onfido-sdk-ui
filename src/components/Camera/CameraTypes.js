// @flow
import Webcam from 'react-webcam-onfido'
import * as React from 'react'
import type { ChallengeType } from './Liveness/Challenge'

type CameraCommonType = {
  autoCapture: boolean,
  method: string,
  title: string,
  subTitle: string,
  onUserMedia: Function,
  onUploadFallback: File => void,
  onFailure: Function,
  onUserMedia: void => void,
  i18n: Object,
  isFullScreen: boolean,
}

type CameraActionType = {
  children?: React.Element<any>,
  hint?: any,
  isFullScreen?: boolean,
}

type CameraPureType = {
  ...CameraCommonType,
  hasError?: boolean,
  webcamRef: React.Ref<typeof Webcam>,
  trackScreen: Function,
  useFullScreen: boolean => void,
  video?: boolean,
}

type CameraType = {
  ...CameraCommonType,
  onFailure: ?Error => void,
  onScreenshot: Function,
  onVideoRecorded: (?Blob, ?ChallengeType[]) => void,
  trackScreen: Function,
  hasError?: boolean,
  useFullScreen: boolean => void,
  liveness: boolean
}

type CameraStateType = {
  hasError: boolean,
  hasGrantedPermission: ?boolean,
  hasSeenPermissionsPrimer: boolean,
}

export type { CameraPureType, CameraType, CameraActionType, CameraStateType};
