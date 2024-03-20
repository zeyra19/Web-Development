import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Signup = () => {
    //yukarıdan ve aşağıdan 30px, soldan ve sağdan 20px padding
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'green' }
    const marginTop = { marginTop: '10px' }

    return (
        <Grid>
            <Paper //HEPSİNİ BURADA TOPLUYORUM
                elevation={20}
                style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Kayıt Ol</h2>
                    <Typography variant='caption'>Kayıt Olmak İçin Lütfen Bu Formu Doldurunuz</Typography>
                </Grid>

                <Grid >
                    <form>
                        <TextField fullWidth style={marginTop} label='Adınız' />
                        <TextField fullWidth style={marginTop} label='Mail Adresiniz' />
                        <TextField fullWidth style={marginTop} label='Telefon Numaranız' />
                        <TextField fullWidth type='password' style={marginTop} label='Şifreniz' />
                        <TextField fullWidth type='password' style={marginTop} label='Şifreyi Onayla' />

                        <FormControlLabel
                            control={<Checkbox
                            name='checkedA' />}

                            label='Tüm Çerezleri Kabl Ediyem' />

                        <Button type='submit' style={marginTop} variant='contained' color='primary'>kayıt ol</Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Signup;