<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title class="headline">
                        Notification Style :<code>v-alert</code>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-alert
                            color="info"
                            dark
                            border="right"
                        >
                            This is a plain notification.
                        </v-alert>
                        <v-alert
                            border="top"
                            color="indigo lighten-2"
                            dark
                        >
                            I'm an alert with a top border and red color
                        </v-alert>
                        <v-alert
                            color="success"
                            dark
                            dismissible
                            prominent
                            elevation="5"
                        >
                            his is a notification with close button.
                        </v-alert>
                        <v-alert
                            border="top"
                            type="info"
                            colored-border
                            elevation="3"
                            dismissible
                        >
                            Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
                        </v-alert>
                        <v-alert
                            type="info"
                            dense
                            dismissible
                        >
                            I'm a dense alert with a <strong>type</strong> of info
                        </v-alert>
                        <v-alert
                            dense
                            outlined
                            type="error"
                            dismissible
                        >
                            I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error
                        </v-alert>
                        <v-alert
                            color="success"
                            dark
                            dismissible
                            icon="mdi-bell"
                        >
                            This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title class="headline">
                        Notification state, text and icon :<code>v-alert</code>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-alert type="success">
                            I'm a success alert.
                        </v-alert>
                        <v-alert type="info">
                            I'm an info alert.
                        </v-alert>
                        <v-alert type="warning">
                            I'm a warning alert.
                        </v-alert>
                        <v-alert type="error">
                            I'm an error alert.
                        </v-alert>
                        <v-alert
                            color="#C51162"
                            dark
                            icon="mdi-material-design"
                            border="right"
                            dismissible
                        >
                            Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
                        </v-alert>
                        <v-alert
                            outlined
                            text
                            type="success"
                            border="left"
                        >
                            Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis. Vestibulum ullamcorper mauris at ligula.
                        </v-alert>
                          <v-alert
                            prominent
                            type="error"
                            >
                            <v-row align="center">
                                <v-col class="grow">
                                Nunc nonummy metus. Nunc interdum lacus sit amet orci. Nullam dictum felis eu pede mollis pretium. Cras id dui.
                                </v-col>
                                <v-col class="shrink">
                                <v-btn>Take action</v-btn>
                                </v-col>
                            </v-row>
                            </v-alert>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-title class=" headline flex justify-center">
                        Transition, toggle and location <code>v-snackbar</code>
                    </v-card-title>
                    <v-card-text>
                        <v-row justify="center">
                            <v-col cols="10" lg="8">
                                <div class="text-center">
                                    <v-btn
                                        color="success"
                                        @click="alert = !alert"
                                    >Toggle</v-btn>
                                </div>
                                <v-alert
                                    color="pink"
                                    dark
                                    border="top"
                                    icon="mdi-home"
                                    transition="scale-transition"
                                    :value="alert">
                                    Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
                                </v-alert>
                                <v-row>
                                    <v-col
                                        v-for="dir in directions"
                                        :key="dir"
                                        cols="4"
                                    >
                                        <v-btn
                                            color="indigo"
                                            dark
                                            tile
                                            class="v-btn--block"
                                            @click="randomColor(), direction = dir, snackbar = true"
                                        >
                                            {{ dir }}
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                           <v-snackbar
                            v-model="snackbar"
                            :color="color"
                            timeout="3000"
                            v-bind="{
                                [parsedDirection[0]]: true,
                                [parsedDirection[1]]: true
                            }"
                            >
                                Welcome to <span class="font-weight-bold">&nbsp;MATERIAL DASHBOARD&nbsp;</span> — a beautiful admin panel for every web developer.
                                <template v-slot:action="{ attrs }">
                                    <v-btn
                                    color="pink"
                                    text
                                    v-bind="attrs"
                                    @click="snackbar = false"
                                    >
                                    Close
                                    </v-btn>
                                </template>
                            </v-snackbar>
                    </v-card-text>
                </v-card>
                </v-col>
                <v-col>
                    <v-card height="300" flat>
                        <v-snackbar
                            :timeout="-1"
                            :value="true"
                            absolute
                            left
                            shaped
                            top
                        >
                            Lorem ipsum dolor sit amet consectetur.
                        </v-snackbar>
                        <v-snackbar
                            :timeout="-1"
                            :value="true"
                            color="blue-grey"
                            absolute
                            right
                            top
                            rounded="pill"
                        >
                            Lorem ipsum dolor sit amet consectetur.
                        </v-snackbar>
                        <v-snackbar
                            :timeout="-1"
                            :value="true"
                            color="deep-purple accent-4"
                            absolute
                            centered
                            elevation="24"
                        >
                            Lorem ipsum dolor sit amet consectetur.
                        </v-snackbar>
                        <v-snackbar
                            :timeout="-1"
                            :value="true"
                            color="primary"
                            absolute
                            left
                            bottom
                            text
                        >
                            Lorem ipsum dolor sit amet consectetur.

                        </v-snackbar>
                        <v-snackbar
                            :timeout="-1"
                            :value="true"
                            color="success"
                            absolute
                            right
                            bottom
                            outlined
                        >
                            Lorem ipsum dolor sit amet consectetur.

                        </v-snackbar>
                    </v-card>
                </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            alert: false,
            color: 'info',
            colors: [
                'info',
                'success',
                'warning',
                'error',
            ],
            snackbar: false,
            direction: 'top center',
            directions: [
                'top left',
                'top center',
                'top right',
                'bottom left',
                'bottom center',
                'bottom right',
            ],
            endDirection:[]
        }
    },
    methods: {
      randomColor () {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },
    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
    methods: {
      randomColor () {
            console.log(this.parsedDirection);
            this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },
}
</script>
