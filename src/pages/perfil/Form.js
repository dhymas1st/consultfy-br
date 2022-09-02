import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from '../authentication/auth-forms/FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const Form = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    cpf: '',
                    nascimento: '',
                    email: '',
                    telefone: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string().max(255).required('Este campo é obrigatório'),
                    lastname: Yup.string().max(255).required('Este campo é obrigatório'),
                    cpf: Yup.string().max(255).required('Este campo é obrigatório'),
                    nascimento: Yup.string().max(255).required('Este campo é obrigatório'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    telefone: Yup.string().max(255).required('Este campo é obrigatório')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    console.log('disparou!', values);
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstname-signup">Nome*</InputLabel>
                                    <OutlinedInput
                                        id="firstname-login"
                                        type="firstname"
                                        value={values.firstname}
                                        name="firstname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu nome"
                                        fullWidth
                                        error={Boolean(touched.firstname && errors.firstname)}
                                    />
                                    {touched.firstname && errors.firstname && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.firstname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="lastname-signup">Sobrenome*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.lastname && errors.lastname)}
                                        id="lastname-signup"
                                        type="lastname"
                                        value={values.lastname}
                                        name="lastname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu sobrenome"
                                        inputProps={{}}
                                    />
                                    {touched.lastname && errors.lastname && (
                                        <FormHelperText error id="helper-text-lastname-signup">
                                            {errors.lastname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cpf">CPF*</InputLabel>
                                    <OutlinedInput
                                        id="cpf"
                                        type="cpf"
                                        value={values.cpf}
                                        name="cpf"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu CPF"
                                        fullWidth
                                        error={Boolean(touched.cpf && errors.cpf)}
                                    />
                                    {touched.cpf && errors.cpf && (
                                        <FormHelperText error id="helper-text-cpf">
                                            {errors.cpf}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="nascimento">Data de nascimento*</InputLabel>
                                    <OutlinedInput
                                        id="nascimento"
                                        type="nascimento"
                                        value={values.nascimento}
                                        name="nascimento"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite a sua data de nascimento"
                                        fullWidth
                                        error={Boolean(touched.nascimento && errors.nascimento)}
                                    />
                                    {touched.nascimento && errors.nascimento && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.nascimento}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">E-mail*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu e-mail"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="telefone">Telefone*</InputLabel>
                                    <OutlinedInput
                                        id="telefone"
                                        type="telefone"
                                        value={values.telefone}
                                        name="telefone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu telefone"
                                        fullWidth
                                        error={Boolean(touched.telefone && errors.telefone)}
                                    />
                                    {touched.telefone && errors.telefone && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.telefone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="genero">Gênero*</InputLabel>
                                    <OutlinedInput
                                        id="genero"
                                        type="genero"
                                        value={values.genero}
                                        name="genero"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu genero"
                                        fullWidth
                                        error={Boolean(touched.genero && errors.genero)}
                                    />
                                    {touched.genero && errors.genero && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.genero}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="tipo-endereco">Tipo de endereço*</InputLabel>
                                    <OutlinedInput
                                        id="tipo-endereco"
                                        type="tipo-endereco"
                                        value={values.tipoendereco}
                                        name="tipo-endereco"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Casa, apartamento, chácara"
                                        fullWidth
                                        error={Boolean(touched.tipoendereco && errors.tipoendereco)}
                                    />
                                    {touched.tipoendereco && errors.tipoendereco && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.tipoendereco}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cep">CEP*</InputLabel>
                                    <OutlinedInput
                                        id="cep"
                                        type="cep"
                                        value={values.cep}
                                        name="cep"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu CEP"
                                        fullWidth
                                        error={Boolean(touched.cep && errors.cep)}
                                    />
                                    {touched.cep && errors.cep && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.cep}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="logradouro">Logradouro*</InputLabel>
                                    <OutlinedInput
                                        id="logradouro"
                                        type="logradouro"
                                        value={values.logradouro}
                                        name="logradouro"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu endereço"
                                        fullWidth
                                        error={Boolean(touched.logradouro && errors.logradouro)}
                                    />
                                    {touched.logradouro && errors.logradouro && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.logradouro}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="numero">Número*</InputLabel>
                                    <OutlinedInput
                                        id="numero"
                                        type="numero"
                                        value={values.numero}
                                        name="numero"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o numero do endreço"
                                        fullWidth
                                        error={Boolean(touched.numero && errors.numero)}
                                    />
                                    {touched.numero && errors.numero && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.numero}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="complemento">Complemento</InputLabel>
                                    <OutlinedInput
                                        id="complemento"
                                        type="complemento"
                                        value={values.complemento}
                                        name="complemento"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o complemento"
                                        fullWidth
                                        error={Boolean(touched.complemento && errors.complemento)}
                                    />
                                    {touched.complemento && errors.complemento && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.complemento}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cidade">Cidade*</InputLabel>
                                    <OutlinedInput
                                        id="cidade"
                                        type="cidade"
                                        value={values.cidade}
                                        name="cidade"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite a sua cidade"
                                        fullWidth
                                        error={Boolean(touched.cidade && errors.cidade)}
                                    />
                                    {touched.cidade && errors.cidade && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.cidade}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cidade">Estado*</InputLabel>
                                    <OutlinedInput
                                        id="estado"
                                        type="estado"
                                        value={values.estado}
                                        name="estado"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu estado"
                                        fullWidth
                                        error={Boolean(touched.estado && errors.estado)}
                                    />
                                    {touched.estado && errors.estado && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.estado}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Cadastrar
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Form;
