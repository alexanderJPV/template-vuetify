<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="green">
                        <div class="white--text">
                            <p class="display-1 font-weight-light">
                                Material Dashboard Heading
                            </p>
                            <p class="subtitle-1 font-weight-light">
                                Created using Roboto Font Family
                            </p>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-item-group mandatory>
                            <v-sheet
                                class="overflow-y-auto"
                                max-height="600"
                            >
                                <v-item
                                    v-for="[c, text, size, weight, spacing, margin] in typography" :key="c"
                                >
                                    <template v-slot:default="{ active, toggle }">
                                        <v-sheet
                                            :color="active ? $vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4' : undefined"
                                            style="cursor: pointer;"
                                            tile
                                            @click="toggle"
                                        >
                                            <div
                                                :class="[`text-${c}`, active && `mb-${margin}`]"
                                                class="transition-swing"
                                                v-text="text"
                                            >
                                            </div>
                                            <code>text-{{c}}</code>
                                            <v-expand-transition>
                                                <v-responsive
                                                    v-if="active"
                                                     max-width="350"
                                                >
                                                <div class="d-flex justify-space-between caption">
                                                    <div>
                                                        <div class="grey--text mb-2">
                                                            Font
                                                        </div>
                                                        <div class="font-weight-medium">
                                                            Roboto
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="grey--text mb-2">
                                                            Weight
                                                        </div>
                                                        <div
                                                            class="font-weight-medium"
                                                            v-text="weight"
                                                        >
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="grey--text mb-2">
                                                            Size
                                                        </div>
                                                        <div
                                                            class="font-weight-medium"
                                                            v-text="size"
                                                        >
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            class="grey--text ext-darken-1  mb-2"
                                                        >
                                                            Letter spacing
                                                        </div>
                                                        <div
                                                            class="font-weight-medium"
                                                            v-text="spacing"
                                                        >
                                                        </div>
                                                    </div>
                                                </div>
                                                </v-responsive>
                                            </v-expand-transition>
                                        </v-sheet>
                                    </template>
                                </v-item>
                            </v-sheet>
                        </v-item-group>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-row
                            v-for="(t, i) in typographyOld"
                            :key="i"
                            align="center"
                        >
                            <v-col
                                cols="1"
                                md="3"
                            >
                                <span
                                    class="grey--text"
                                    v-text="t[0]"
                                >
                                </span>
                                <code>{{i}}</code>
                            </v-col>
                            <v-col cols="8">
                                <component
                                    :is="t[2]"
                                    :class="i">
                                    <template v-if="i !== 'quote'">
                                        {{t[1]}}
                                    </template>
                                    <p v-if="i === 'quote'">
                                        {{t[1]}}
                                    </p>
                                    <template v-if="i === 'small'">
                                        <br>
                                        <small>Use 'small' tag for the headers</small>
                                    </template>
                                </component>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <div class="headline red--text">
                                    Font Emphasis Example fonts
                                </div>
                                <p class="font-weight-black">
                                    Black Text code - {{trytext}}
                                </p>
                                <p class="font-weight-bold">
                                    Bold text. - {{trytext}}
                                </p>
                                <p class="font-weight-medium">
                                    Medium weight text. - {{trytext}}
                                </p>
                                <p class="font-weight-regular">
                                    Normal weight text. - {{trytext}}
                                </p>
                                <p class="font-weight-light">
                                    Light weight text. - {{trytext}}
                                </p>
                                <p class="font-weight-thin">
                                    Thin weight text. - {{trytext}}
                                </p>
                                <p class="font-italic">
                                    Italic text. - {{trytext}}
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <div class="headline red--text">
                                    Text Aligment
                                </div>
                                <p class="text-justify primary white--text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit cum, nihil illum assumenda sed harum ex debitis voluptates commodi molestiae, quasi quisquam amet ipsa vel ducimus, officia facere fugit esse!
                                </p>
                                <p class="text-left">
                                    Left aligned text on all viewport sizes.
                                </p>
                                <p class="text-center ">
                                    Center aligned text on all viewport sizes.
                                </p>
                                <p class="text-right">
                                    Right aligned text on all viewport sizes.
                                </p>
                                <p class="text-sm-right">
                                    Left aligned text on viewports sized SM (small) or wider.
                                </p>
                                <p class="text-md-right">
                                    Left aligned text on viewports sized MD (medium) or wider.
                                </p>
                                <p class="text-lg-right">
                                    Left aligned text on viewports sized LG (large) or wider.
                                </p>
                                <p class="text-xl-left">
                                    Left aligned text on viewports sized XL (extra-large) or wider.
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <div class="headline red--text">
                                    Decoration
                                </div>
                                <a
                                    href="#"
                                    class="text-decoration-none font-weight-bold"
                                    >
                                    Non-underlined link
                                </a>
                                <div class="text-decoration-line-through font-weight-regular">
                                    Line-through text
                                </div>
                                <div class="text-decoration-overline font-weight-regular">
                                    Overline text
                                </div>
                                <div class="text-decoration-underline font-weight-regular">
                                    Underline text
                                </div>
                            </v-col>
                            <v-col cols="12">
                                <div class="headline green--text">Opacity Text</div>
                                <p class="text--primary">
                                    High-emphasis has an opacity of 87%.
                                </p>
                                <p class="text--secondary">
                                    Medium-emphasis text and hint text have opacities of 60%.
                                </p>
                                <p class="text--disabled">
                                    Disabled text has an opacity of 38%.
                                </p>
                            </v-col>
                            <v-col>
                                <div class="headline orange--text">
                                    Text Transform Upper, Lowerand capitalize
                                </div>
                                <p class="text-lowercase">
                                    Lowercased Text
                                </p>
                                <p class="text-uppercase">
                                    uppercased Text
                                </p>
                                <p class="text-capitalize">
                                    CapiTaliZed text try.
                                </p>
                                <p
                                    class="text-break"
                                    style="max-width: 4rem;"
                                >
                                    SUBDERMATOGLYPHIC
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <div class="headline red--text">
                                    Wrapping and overflow
                                </div>
                                <div
                                    class="text-no-wrap primary"
                                    style="width: 5rem;"
                                >
                                    This text should overflow the parent alexander.
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
const leader = 'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
const leaderShort = leader.slice(0, 105) + '...'
const material = 'The Life of Material Dashboard'
const small = 'Header with small subtitle'
export default {
    data() {
        return {
            trytext: material,
            model: null,
            typography: [
                ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
                ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
                ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
                ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
                ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
                ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
                ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
                ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
                ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
                ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
                ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
                ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
                ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
            ],
            typographyOld: {
                'display-4': ['Display 4', material, 'h1'],
                'display-3': ['Display 3', material, 'h2'],
                'display-2': ['Display 2', material, 'h3'],
                'display-1': ['Display 1', material, 'h4'],
                headline: ['Headline', material, 'h5'],
                'title text-uppercase': ['Title', material, 'h6'],
                '': ['Paragraph', leader, 'p'],
                blockquote: ['Quote', leader, 'blockquote'],
                'text--disabled': ['Muted Text', leaderShort, 'p'],
                'primary--text': ['Primary Text', leaderShort, 'p'],
                'info--text': ['Info Text', leaderShort, 'p'],
                'success--text': ['Success Text', leaderShort, 'p'],
                'warning--text': ['Warning Text', leaderShort, 'p'],
                'danger--text': ['Danger Text', leaderShort, 'p'],
                small: ['Small Tag', small, 'h2'],
            },
        }
    },
}
</script>