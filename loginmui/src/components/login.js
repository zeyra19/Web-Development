import React from 'react';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useHistory } from 'react-router-dom';

const Login = () => {

    // marginle öğenin etrafında 20 piksel boşluk olacak ve yatay da ortalanacak
    const paperStyle = { padding: 30, height: '450px', width: 280, margin: ' 20px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const textStyle = { marginTop: 15 }
    const btnstyle = { margin: '10px 0' }

    return (
        <Grid>
            <Paper
                elevation={10}
                style={paperStyle}>

                <Grid align='center'>
                    <Avatar
                        style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Giriş Yap</h2>
                </Grid>

                <TextField
                    label='Kullanıcı Adınız'
                    // placeholder='Kullanıcı Adınızı Giriniz' 
                    fullWidth required
                />

                <TextField style={textStyle}
                    label='Şifreniz'
                    // placeholder='Şifrenizi Giriniz' 
                    type='password'
                    fullWidth required
                />
                {/* paperın tüm alanını kaplasın diye textfielda fullwidth veririm ve zorunlu alan olduğunu belirtirim */}


                <FormControlLabel
                    control={
                        <Checkbox
                            name='checkedB'
                            color='primary'
                        />
                    }
                    label='Beni Hatırla'
                />

                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={btnstyle}
                    fullWidth > giriş yap</Button>


                <Typography>
                    <Link href='/'>
                        Şifremi Unuttum
                    </Link>
                </Typography>

                <Typography>
                    Bir Hesabın Yok Mu ?
                        <Link href='/signup'>
                            Kayıt Ol
                        </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;