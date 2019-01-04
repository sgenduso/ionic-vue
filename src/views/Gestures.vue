<template>
    <div class="gestures" padding-bottom>
    <!-- avatar with popover (in header?) -->
    <div class="ion-page" main>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Stuff and Things</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content>
                <!-- <ion-refresher slot="fixed">
                    <ion-refresher-content
                        pulling-icon="arrow-dropdown"
                        pulling-text="Pull to refresh"
                        refreshing-spinner="circles"
                        refreshing-text="Refreshing..."
                        closeDuration="2000">
                    </ion-refresher-content>
                </ion-refresher> -->


                <div class="menu-buttons" padding-top>
                    <ion-button @click="openStart">Open Left Menu</ion-button>
                    <ion-button @click="openEnd" fill="outline">Open Right Menu</ion-button>
                </div>

                <div class="toggles">
                    <ion-toggle disabled></ion-toggle>
                    <ion-toggle></ion-toggle>
                    <ion-toggle color="secondary" checked></ion-toggle>
                    <ion-toggle color="tertiary"></ion-toggle>
                </div>

                <div class="buttons" padding-bottom>
                    <ion-button @click="toast" color="dark" fill="outline">Toast</ion-button>
                    <ion-button @click="actionSheet" color="light">Action Sheet</ion-button>
                </div>

                <div class="selects">
                        <ion-list>
                            <ion-item>
                            <ion-label>Pick Some Pizza Toppings</ion-label>
                            <ion-select multiple="true" cancel-text="Nah" ok-text="Okay!" color="success">
                                <ion-select-option value="bacon">Bacon</ion-select-option>
                                <ion-select-option value="olives">Black Olives</ion-select-option>
                                <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
                                <ion-select-option value="peppers">Green Peppers</ion-select-option>
                                <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
                                <ion-select-option value="onions">Onions</ion-select-option>
                                <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
                                <ion-select-option value="pineapple">Pineapple</ion-select-option>
                                <ion-select-option value="sausage">Sausage</ion-select-option>
                                <ion-select-option value="Spinach">Spinach</ion-select-option>
                            </ion-select>
                            </ion-item>

                            <ion-item>
                            <ion-label>Pick Some Pets</ion-label>
                            <ion-select multiple="true" color="success">
                                <ion-select-option value="bird" selected>Bird</ion-select-option>
                                <ion-select-option value="cat">Cat</ion-select-option>
                                <ion-select-option value="dog" selected>Dog</ion-select-option>
                                <ion-select-option value="honeybadger">Honey Badger</ion-select-option>
                            </ion-select>
                            </ion-item>
                        </ion-list>
                    </div>

                    <div class="slide-item">
                        <ion-list>
                            <ion-item-sliding>
                                <ion-item>
                                    <ion-label>Slide me for options</ion-label>
                                </ion-item>
                                <ion-item-options side="start">
                                    <ion-item-option color="warning">
                                        <i class="far fa-star"></i>&nbsp;Favorite
                                    </ion-item-option>
                                    <ion-item-option color="success">
                                        <i class="fas fa-share"></i>&nbsp;Share
                                    </ion-item-option>
                                </ion-item-options>

                                <ion-item-options side="end">
                                    <ion-item-option color="danger">
                                        <i class="far fa-envelope"></i>&nbsp;Unread
                                    </ion-item-option>
                                </ion-item-options>
                            </ion-item-sliding>
                        </ion-list>
                    </div>

                <ion-progress-bar type="indeterminate" color="secondary"></ion-progress-bar>
                <ion-progress-bar type="indeterminate"></ion-progress-bar>

                <ion-item padding-bottom>
                    <ion-label>Date Picker</ion-label>
                    <ion-datetime display-format="MM/YYYY" picker-format="MMMM YYYY" value="2019-01-07" color="light"></ion-datetime>
                </ion-item>

                <div class="reorder">
                    <ion-list>
                        <ion-reorder-group disabled="false">

                        <ion-reorder>
                            <ion-item color="danger">
                            <ion-label>
                                Drag
                            </ion-label>
                            <ion-icon name="pizza"></ion-icon>
                            </ion-item>
                        </ion-reorder>

                        <ion-reorder>
                            <ion-item color="primary">
                            <ion-label>
                                Us
                            </ion-label>
                            <ion-icon name="pizza"></ion-icon>
                            </ion-item>
                        </ion-reorder>

                        <ion-reorder>
                            <ion-item color="warning">
                            <ion-label>
                                Around
                            </ion-label>
                            <ion-icon name="pizza"></ion-icon>
                            </ion-item>
                        </ion-reorder>

                        <ion-reorder>
                            <ion-item color="success">
                            <ion-label>
                                To
                            </ion-label>
                            <ion-icon name="pizza"></ion-icon>
                            </ion-item>
                        </ion-reorder>

                        <ion-reorder>
                            <ion-item color="secondary">
                            <ion-label>
                                Reorder
                            </ion-label>
                            <ion-icon name="pizza"></ion-icon>
                            </ion-item>
                        </ion-reorder>

                        </ion-reorder-group>
                    </ion-list>
                </div>

            </ion-content>
        </div>

        <!-- <div class="menus"> -->
            <ion-menu side="start">
                <ion-header>
                    <ion-toolbar color="secondary">
                        <ion-title>Left Menu</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content padding>
                    <ion-label padding-bottom>SOME MENU CONTENTS</ion-label>
                    <ion-searchbar animated autocomplete autocorrect showCancelButton="true"></ion-searchbar>

                    <ion-item padding-bottom>
                        <ion-label position="floating" color="secondary">Floating Label</ion-label>
                        <ion-input></ion-input>
                    </ion-item>

                </ion-content>
            </ion-menu>

            <ion-menu side="end">
                <ion-header>
                    <ion-toolbar color="success">
                        <ion-title>Hola</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content padding>
                    <ion-label padding-bottom>SOME OTHER MENU CONTENTS</ion-label>
                    <ion-list>
                        <ion-item>
                            <ion-range color="danger" pin="true" value="58"></ion-range>
                        </ion-item>

                        <ion-item>
                            <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary" pin="true" value="1300"></ion-range>
                        </ion-item>

                        <ion-item>
                            <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true" pin="true" color="success" value="{ lower: '60'; upper: '72'; }"></ion-range>
                        </ion-item>
                    </ion-list>
                </ion-content>
            </ion-menu>

    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Gestures extends Vue {
    protected openStart(): void {
        // document.querySelector('ion-menu-controller').
        this.$ionic.menuController.open('start');
    }
    protected openEnd(): void {
        this.$ionic.menuController.open('end');
        // document.querySelector('ion-menu-controller').open('end');
    }

    protected async toast() {
        const toast = await this.$ionic.toastController.create({
            message: 'Look at me go!!',
            showCloseButton: true,
            translucent: true,
            animated: true,
            color: 'light',
            position: 'top',
            closeButtonText: 'close'
        });
        return await toast.present();
    }

    protected async actionSheet() {
    const actionSheet = await this.$ionic.actionSheetController.create({
        header: 'Albums',
        buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
            console.log('Delete clicked');
        }
        }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
            console.log('Share clicked');
        }
        }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
            console.log('Play clicked');
        }
        }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
            console.log('Favorite clicked');
        }
        }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
            console.log('Cancel clicked');
        }
        }]
    });
        await actionSheet.present();
    }

}
</script>

<style lang="scss" scoped>
    ion-grid, ion-row {
        height: 85vh;
    }

    ion-item-sliding, button.datetime-cover {
        border-top: 1px solid var(--light-gray);
        border-bottom: 1px solid var(--light-gray);
    }

    ion-input {
        border-bottom: 1px solid var(--light-gray);
    }

</style>
