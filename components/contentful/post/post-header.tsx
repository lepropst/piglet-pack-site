import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Image from 'next/image';

export function PostHeader(props: {
  title: string;
  date: string;
  coverImage?: { image: { url: string; description: string } } | null;
}) {
  console.log('coverimgae');
  console.log(props.coverImage);
  return (
    <Box
      sx={{
        display: 'flex',
        '*': { padding: '.5em' },
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">{props.title}</Typography>
      {props.coverImage !== null && props.coverImage?.image.url && (
        <Box
          sx={{
            width: 'auto',
            height: 250,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            objectFit="contain"
            width={250}
            height={250}
            alt={props.coverImage.image?.description}
            src={props.coverImage.image.url}
          />
        </Box>
      )}
      <Typography variant="body1">{new Date(props.date).toString()}</Typography>
    </Box>
  );
}
