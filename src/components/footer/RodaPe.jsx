import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Link, Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(1),
    },
}));

export default function RodaPe() {

    const linkedinCarol = (
        <Link href='https://www.linkedin.com/in/ana-carolina-costa-91a74842/' underline="always">
            {'Ana Carolina da Costa Rodrigues'}
        </Link>

    )
    
    const desenvolvedora = (
        <div>
            {`Desenvolvedora`}
        </div>
    )


    return (
        <Root
            sx={{
                paddingTop: '5%',
            }}
        >
            <Typography variant="caption" display="block" gutterBottom>
                <Divider light variant='middle' />
                <Typography variant="caption">{desenvolvedora}</Typography>
                {linkedinCarol}
            </Typography>

        </Root>
    )
}