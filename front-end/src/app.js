const MyNameApp = {
     data() {
        return {
            users: [],
            page: 1,
            totalPages: 1,

            view: 'list',

            product: null,

            form: {
                nome: '',
                preco: '',
                user_id: null,
                descricao: ''
            },

            success: false,
            loading: false,
            error: null
        }
    },

    mounted() {
        this.fetchUsers();
    },

    methods: {
        async fetchUsers(page = 1) {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/users?page=${page}`
                );

                this.users = response.data.data;
                this.page = response.data.meta.current_page;
                this.totalPages = response.data.meta.last_page;

            } catch (err) {
                console.error(err);
                this.error = 'Erro ao carregar usuários';
            } finally {
                this.loading = false;
            }
        },
        async fetchUsers() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users');
                this.users = response.data.data;
            } catch (err) {
                console.error(err);
                this.error = 'Erro ao carregar usuários';
            } finally {
                this.loading = false;
            }
        },
         changePage(newPage) {
            this.fetchUsers(newPage);
        },

        // Redireciona para user.html passando o ID do usuário
        goToUser(userId) {
            window.location.href = `user.html?user_id=${userId}`;
        },

         goToCreate() {
         window.location.href = "formulario.html";
}       ,
        // 🔄 RESET FORM
        resetForm() {
            this.form = {
                nome: '',
                preco: '',
                user_id: null,
                descricao: ''
            };
            this.success = false;
            this.error = null;
        },

        // 🔥 CREATE
        async createProduct() {
            this.loading = true;
            this.error = null;
            this.success = false;

            try {
                await axios.post('http://127.0.0.1:8000/api/produtos', {
                    nome: this.form.nome,
                    preco: parseFloat(this.form.preco),
                    user_id: this.form.user_id,
                    descricao: this.form.descricao
                });

                this.success = true;
                this.resetForm();

            } catch (err) {
                console.error(err);

                if (err.response && err.response.data) {
                    this.error = JSON.stringify(err.response.data);
                } else {
                    this.error = 'Erro ao cadastrar produto';
                }
            } finally {
                this.loading = false;
            }
        },

        // 🔙 VOLTAR
        goBack() {
            this.view = 'list';
            this.product = null;
            this.error = null;
        }
    }
};

const { createApp } = Vue;
const { createVuetify } = Vuetify;

const app = createApp(MyNameApp);
const vuetify = createVuetify();

app.use(vuetify);
app.mount('#app');