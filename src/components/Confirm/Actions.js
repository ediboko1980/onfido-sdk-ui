import { h } from 'preact'
import classNames from 'classnames'
import { Button } from '@onfido/castor-react'
import { localised } from '../../locales'
import theme from '../Theme/style.scss'
import style from './style.scss'

const RetakeAction = localised(({ retakeAction, translate, singleAction }) => (
  <Button
    variant={singleAction ? 'primary' : 'secondary'}
    className={classNames(theme[singleAction ? 'button-lg' : 'button-sm'], {
      [theme['button-centered']]: singleAction,
      [style['retakeAction']]: !singleAction,
    })}
    onClick={retakeAction}
    data-onfido-qa="redo-action-btn"
  >
    {translate(
      singleAction
        ? 'doc_confirmation.button_primary_redo'
        : 'doc_confirmation.button_secondary_redo'
    )}
  </Button>
))

const ConfirmAction = localised(
  ({ confirmAction, isUploading, translate, error }) => (
    <Button
      variant="primary"
      className={theme['button-sm']}
      onClick={confirmAction}
      disabled={isUploading}
      data-onfido-qa="confirm-action-btn"
    >
      {error.type === 'warn'
        ? translate('doc_confirmation.button_primary_upload_anyway')
        : translate('doc_confirmation.button_primary_upload')}
    </Button>
  )
)

const Actions = ({
  retakeAction,
  confirmAction,
  isUploading,
  error,
  forceRetake,
}) => (
  <div className={style.actionsContainer}>
    <div
      className={classNames(style.actions, {
        [style.singleAction]: forceRetake,
      })}
    >
      <RetakeAction {...{ retakeAction, singleAction: forceRetake }} />
      {!forceRetake && (
        <ConfirmAction {...{ confirmAction, isUploading, error }} />
      )}
    </div>
  </div>
)

export default Actions
