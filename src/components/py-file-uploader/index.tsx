// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import CameraPlusOutline from 'mdi-material-ui/CameraPlusOutline'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}

type Props = {
  nationalIdentityCardName: string
  error: boolean
  onChange: any
}

const PyFileUploader = (props: Props) => {
  const [files, setFiles] = useState<File[]>([])
  const [isAddFile, setIsAddFile] = useState<boolean>(false)

  // redux
  // const dispatch = useDispatch<AppDispatch>()

  // ** Hook
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      const _files: File[] = acceptedFiles.map((file: File) => Object.assign(file))

      setIsAddFile(true)
      setFiles(_files)
      props.onChange(_files[0])
    }
  })

  const img = files.map((file: FileProp) => (
    <img
      key={file.name}
      alt={file.name}
      className='single-file-image'
      style={{ height: 80 }}
      src={URL.createObjectURL(file as any)}
    />
  ))

  return (
    <Card
      sx={{
        border: `1px dashed ${props.error ? 'red' : '#444094'}`,
        cursor: 'pointer',
        '&:hover': {
          background: 'rgb(68, 64, 148, 0.2)'
        }
      }}
    >
      <CardContent>
        <Box {...getRootProps({ className: 'dropzone' })} sx={acceptedFiles.length ? { height: 80 } : {}}>
          <input {...getInputProps()} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: ['column', 'column', 'row'],
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {files.length ? img : null}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: ['column', 'column', 'row'],
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {!isAddFile && (
              <>
                <CameraPlusOutline sx={{ color: '#444094', mb: 5 }} />
                <Box
                  sx={{ ml: 2, display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}
                >
                  <Typography sx={{ color: '#000000' }}>
                    <span style={{ color: props.error ? 'red' : '#444094', fontWeight: 500 }}>Choose file</span> or drag and open here
                  </Typography>
                  <Typography sx={{ color: '#000000', fontWeight: 300, fontSize: '11px' }}>
                    FILE FORMATS: DOCX, PDF, JPEG, JPG, PNG, GIF
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PyFileUploader
