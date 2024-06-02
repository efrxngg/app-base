import {Box, Modal} from '@mui/material';
import {Close} from '@mui/icons-material';

import {ReactNode} from 'react';

export function SimpleModal(props: {
  onClose: () => void,
  open: boolean,
  children: ReactNode
}) {
  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '85%',
    width: '75%',
    padding: '10px',
  };

  return <Modal
    open={props.open}
    // onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    disableAutoFocus={true}
  >
    <Box sx={boxStyle}>
      <div className="absolute right-0 top-0 m-3">
        <Close onClick={props.onClose}/>
      </div>
      {props.children}
    </Box>
  </Modal>;
}