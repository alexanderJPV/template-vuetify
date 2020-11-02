export default {
      data: () => ({
        step: 1,
        username: '',
        email: '',
        password: '',
        login: '',
        snackbarType: 'success',
        snackbarMessage: '',
        snackbar: false
    }),
    props:{
        source: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: 'indigo'
        },
        fgColor: {
            type: String,
            default: 'white'
        }
    },
    async fetch({ store, error }, user) {
    try {
      await store.dispatch('users/signupUser', user)
    } catch (e) {
        error({
            statusCode: 503,
            message: 'Unable to sign up user. Please try again later.'
        })
        }
    },
    methods: {
    signup() {
      this.$auth
        .signup({
          data: {
            user: {
              username: this.username,
              email: this.email,
              password: this.password
            }
          }
        })
        .catch((e) => {
          this.error = e + ''
        })
    },
    async signin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            login: this.login,
            password: this.password
          }
        })
        this.snackbarType = response.data.type
        this.snackbarMessage = response.data.message
        this.snackbar = true
      } catch (err) {
        this.snackbarType = 'error'
        this.snackbarMessage = 'Error signing you in'
        this.snackbar = true
      }
    }
  }
}