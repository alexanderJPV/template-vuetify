<template>
    <v-card>
        <v-card-title>
            User Dinamic Form
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-checkbox
                        v-model="limitLogins.checked"
                        :label="limitLogins.label"
                        ></v-checkbox>
                    <v-text-field v-if="limitLogins.checked"
                        label="Number of attempts"
                        type="number"
                        value="0"
                    ></v-text-field>
                    <h2>Users</h2>
                    <v-row v-for="(user, index) in users" :key="index">
                        <v-col cols="12">
                            <h3>User nro: {{index + 1}}</h3>
                            <v-text-field
                                v-model="user.user"
                                label="Username"
                            ></v-text-field>
                            <v-text-field
                                label="Email"
                            ></v-text-field>
                            <span>User type</span>
                            <v-radio-group>
                                <v-radio v-for="(item, index) in Usertype" :key="index"
                                    :label="item"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-btn block outlined class="mt-3" color="success" @click="addItem">+ Add a User</v-btn>
                </v-col>
            </v-row>
            <v-btn large color="success" class="mt-3">Save</v-btn>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            "limitLogins": {
                label: "Limit login attempts",
                checked: false,
            },
            Usertype:[
                "basic",
                "anonymous",
                "admin"
            ],
            users:[]
        }
    },
    methods:{
        addItem(){
            this.users.push({
                user:'',
                email:''
            })
        }
    }
    // created: function(){
    //     console.log(this.checked);
    // }
}
</script>
