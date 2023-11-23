import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Navigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Login({ session }) {
	if (!session) {
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: '75vh',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography
						component='h1'
						variant='h5'
						style={{
							display: 'flex',
							justifyContent: 'center',
							fontWeight: 'bold',
						}}
					>
						Login
					</Typography>
					<Auth
						supabaseClient={supabase}
						providers={[]}
						appearance={{ theme: ThemeSupa }}
					/>
				</Box>
			</Container>
		)
	} else {
		if (session.user.email === 'samueltan086@gmail.com') {
			return <Navigate to='/dashboard-manajer' />
		} else {
			return <Navigate to='/dashboard-kurir' />
		}
	}
}
