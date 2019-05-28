<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                <div class="card-header">
                    Iniciar sesión
                </div>
                <div class="card-body">
                    <form @submit.prevent="login()">
                        <div class="form-group">
                            <label for="">Nombre de usuario</label>
                            <input v-model="user.email" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Contraseña</label>
                            <input v-model="user.password" type="text" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: {
                email: 'alexis@mail.com',
                password: 123456
            }
        }
    },
    methods: {
        login () {
            this.$http.post('api/auth/login', this.user).then( response => {
                let token = response.data.access_token
                localStorage.setItem('access_token', token)
                this.$http.defaults.headers.common['Authorization'] = 'bearer' + token
                this.$router.push({ name: 'products' })
            }).catch( err => {
                if (err.response.status == 401) {
                    this.$toastr.error('Usuario o contraseña inválidos.')
                }
            })
        }
    }
}
</script>
