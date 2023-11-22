import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Login() {
	const [session, setSession] = useState(null)

	const navigate = useNavigate()

	// const handleSubmit = async (event) => {
	// 	event.preventDefault()
	// 	const data = new FormData(event.currentTarget)

	// 	const mail = data.get('username') + '@fakemail.com'
	// 	const pass = data.get('password')

	// 	try {
	// 		const { data, error } = await supabase.auth.signInWithPassword({
	// 			email: mail,
	// 			password: pass,
	// 		})

	// 		if (error) {
	// 			throw error
	// 		}
	// 		console.log(data)
	// 		if (mail === 'ctubbs0@fakemail.com') {
	// 			navigate('/dashboard-manajer')
	// 		} else {
	// 			navigate('/dashboard-kurir')
	// 		}
	// 	} catch (error) {
	// 		alert(error)
	// 	}
	// }

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])

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
					{/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to="/dashboard-manajer">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </Link>
            </Box> */}
					<Auth
						supabaseClient={supabase}
						providers={[]}
						appearance={{ theme: ThemeSupa }}
					/>
				</Box>
			</Container>
		)
	} else {
		navigate('/dashboard-manajer')
	}
}
