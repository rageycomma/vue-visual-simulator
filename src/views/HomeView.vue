<template>
  <div class="container-character">
    <div class="container">
      <div class="alert alert-info" role="alert">
        ❤️<b>Hi!</b> Thanks for your patience and support of our project, Ragnarok Fans! (p.s. ty Bunny ❤️) ❤️
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 bg-gradient-ragnarok bg-gradient-ragnarok-border my-5"
        >
          <div class="col-md-12 card ragnarok-card">
            <div class="row">
              <div class="col-md-12">
                <div class="row g-0">
                  <div class="col-md-12 content">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    {{ $t("visualSimulator") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6 p-3">
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner p-2">
                        <div class="row">
                          <div class="col-md-12">
                            <JobList />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner p-2">
                        <div class="row">
                          <div class="col-md-12">
                            <form class="form">
                              <div class="input-group py-2 px-1">
                                <div class="input-group-text">
                                  <i class="fas fa-search"></i>
                                </div>
                                <input
                                  type="text"
                                  class="form-control"
                                  :placeholder="$t('searchItem')"
                                  v-model="searchItemQuery"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="d-flex align-items-start">
                          <div
                            class="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <button
                              class="nav-link btn-tab-item active"
                              id="v-pills-top-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-top"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-top"
                              aria-selected="true"
                            >
                              <img v-lazy="{ src: item_top_src, delay: 250 }" alt="Item Top Tab" />
                              <label
                                v-if="$store.state.headgear_top_item.name !== null"
                              >
                                {{ $store.state.headgear_top_item.name }}
                              </label>
                              <label v-else>{{ $t("top") }}</label>
                              <span>{{ $t("top") }}</span>
                            </button>
                            <button
                              class="nav-link btn-tab-item"
                              id="v-pills-mid-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-mid"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-mid"
                              aria-selected="false"
                            >
                              <img v-lazy="{ src: item_mid_src, delay: 250 }" alt="Item Mid Tab" />
                              <label
                                v-if="$store.state.headgear_mid_item.name !== null"
                              >
                                {{ $store.state.headgear_mid_item.name }}
                              </label>
                              <label v-else>{{ $t("mid") }}</label>
                              <span>{{ $t("mid") }}</span>
                            </button>
                            <button
                              class="nav-link btn-tab-item"
                              id="v-pills-bot-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-bot"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-bot"
                              aria-selected="false"
                            >
                              <img v-lazy="{ src: item_bot_src, delay: 250 }" alt="Item Bot Tab" />
                              <label
                                v-if="
                                  $store.state.headgear_bottom_item.name !== null
                                "
                              >
                                {{ $store.state.headgear_bottom_item.name }}
                              </label>
                              <label v-else>{{ $t("bot") }}</label>
                              <span>{{ $t("bot") }}</span>
                            </button>
                            <button
                              class="nav-link btn-tab-item"
                              id="v-pills-garment-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-garment"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-garment"
                              aria-selected="false"
                            >
                              <img
                              v-lazy="{ src: item_garmet_src, delay: 250 }"
                                alt="Item Garmet Tab"
                              />
                              <label v-if="$store.state.garment_item.name !== null">
                                {{ $store.state.garment_item.name }}
                              </label>
                              <label v-else>{{ $t("garment") }}</label>
                              <span>{{ $t("garment") }}</span>
                            </button>
                          </div>
                          <div class="tab-content" id="v-pills-tabContent">
                            <div
                              class="tab-pane tab-pane-items fade show active"
                              id="v-pills-top"
                              role="tabpanel"
                              aria-labelledby="v-pills-top-tab"
                            >
                              <ItemListHeadTop :item_filter="searchItemQuery" />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-mid"
                              role="tabpanel"
                              aria-labelledby="v-pills-mid-tab"
                            >
                              <ItemListHeadMid :item_filter="searchItemQuery" />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-bot"
                              role="tabpanel"
                              aria-labelledby="v-pills-bot-tab"
                            >
                              <ItemListHeadBottom
                                :item_filter="searchItemQuery"
                              />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-garment"
                              role="tabpanel"
                              aria-labelledby="v-pills-garment-tab"
                            >
                              <ItemListGarmet :item_filter="searchItemQuery" />
                            </div>
                            <div class="helper">
                              {{ $t("arrowHelperBefore") }}
                              <img
                                v-lazy="{ src: 
                                  require(`../assets/img/interface/arrows.png`), delay: 250
                                }"
                              />
                              {{ $t("arrowHelperAfter") }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 py-2">
                <div class="bg-gradient-ragnarok bg-gradient-ragnarok-border">
                  <div class="row g-0">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex justify-content-center">
                            <GenderList />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div
                            class="character-box d-flex flex-column justify-content-center align-items-center"
                          >
                            <Character />
                          </div>
                          <div
                            class="mb-3 d-flex flex-column align-items-center"
                          >
                            <TurnCharacter />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex justify-content-center">
                            <BodyPallete />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <h6>{{ $t("hairStyle") }}</h6>
                          <HeadList />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h6>{{ $t("hairColor") }}</h6>
                          <div class="card px-2 py-1">
                            <HairColorList />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-2 px-2">
                  <h6>{{ $t("actions") }}</h6>
                  <ActionList />
                </div>
                <div class="row py-2 px-2">
                  <div class="col-md-6">
                    <h6>{{ $t("costume") }}</h6>
                    <OutfitCheckbox />
                    <h6>{{ $t("mount") }}</h6>
                    <RegularMountCheckbox />
                    <CashMountCheckbox />
                  </div>
                  <div class="col-md-6">
                    <h6>{{ $t("reset") }}</h6>
                    <ClearCharacterButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import environment from "@/env";
import { mapMutations } from "vuex";
import GenderList from "@/components/character/GenderList.vue";
import HairColorList from "@/components/character/HairColorList.vue";
import HeadList from "@/components/character/HeadList.vue";
import BodyPallete from "@/components/character/BodyPallete.vue";
import JobList from "@/components/character/JobList.vue";
import ItemListHeadTop from "@/components/character/ItemListHeadTop.vue";
import ItemListHeadMid from "@/components/character/ItemListHeadMid.vue";
import ItemListGarmet from "@/components/character/ItemListGarmet.vue";
import ItemListHeadBottom from "@/components/character/ItemListHeadBottom.vue";
import Character from "@/components/character/Character.vue";
import TurnCharacter from "@/components/character/TurnCharacter.vue";
import ActionList from "@/components/character/ActionList.vue";
import ClearCharacterButton from "@/components/character/ClearCharacterButton.vue";
import OutfitCheckbox from "@/components/character/OutfitCheckbox.vue";
import RegularMountCheckbox from "@/components/character/RegularMountCheckbox.vue";
import CashMountCheckbox from "@/components/character/CashMountCheckbox.vue";
import { Tooltip } from "bootstrap";

export default {
  data() {
    return {
      item_top_src:
        "https://static.divine-pride.net/images/items/item/19547.png",
      item_mid_src:
        "https://static.divine-pride.net/images/items/item/19735.png",
      item_bot_src:
        "https://static.divine-pride.net/images/items/item/19783.png",
      item_garmet_src:
        "https://static.divine-pride.net/images/items/item/20571.png",
      searchItemQuery: "",
    };
  },
  components: {
    GenderList,
    HairColorList,
    HeadList,
    BodyPallete,
    JobList,
    ItemListHeadTop,
    ItemListHeadMid,
    ItemListHeadBottom,
    ItemListGarmet,
    Character,
    TurnCharacter,
    ActionList,
    ClearCharacterButton,
    OutfitCheckbox,
    RegularMountCheckbox,
    CashMountCheckbox,
  },
  mounted() {
    document.title = environment.app_name;
    this.loadLocalStorage();
    this.updatePanelUrls();

    document.addEventListener("keydown", (event) => {
      const keyName = event.key;
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(keyName)
      ) {
        event.preventDefault();
        let tabPaneItemsWidth = document.querySelector(
          "div.tab-pane-items[id^=v-pills-].show.active"
        ).offsetWidth;
        let numberOfItems = document.querySelectorAll(
          "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none'])"
        ).length;
        let itemsPerRow = parseInt((tabPaneItemsWidth - 32) / 32);
        let listOfAllItems = document.querySelectorAll(
          "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none']"
        );
        let selectedItem = document.querySelector(
          "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item img.item-selected"
        ).parentElement;
        let selectedItemIndex = Array.prototype.indexOf.call(
          listOfAllItems,
          selectedItem
        );
        let itemList = document.querySelectorAll(
          "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none'])"
        );

        if (
          document.querySelectorAll(
            "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none'])"
          ).length > 0
        ) {
          if (
            document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item[style*='display: none'] img.item-selected"
            ) != null
          ) {
            itemList[0].children[0].click();
          } else if (
            document.querySelectorAll(
              "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none'])"
            ).length > 0
          ) {
            switch (keyName) {
              case "ArrowUp":
                if (selectedItemIndex >= itemsPerRow)
                  itemList[selectedItemIndex - itemsPerRow].children[0].click();
                break;
              case "ArrowDown":
                if (selectedItemIndex < numberOfItems - itemsPerRow)
                  itemList[selectedItemIndex + itemsPerRow].children[0].click();
                break;
              case "ArrowLeft":
                if (selectedItemIndex >= 1)
                  itemList[selectedItemIndex - 1].children[0].click();
                break;
              case "ArrowRight":
                if (selectedItemIndex < numberOfItems - 1)
                  itemList[selectedItemIndex + 1].children[0].click();
                break;
              default:
            }
          }

          setTimeout(function () {
            let divTop = document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active"
            ).scrollTop;
            let divHeight = document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active"
            ).offsetHeight;
            let firstVisibleItem = document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item:not([style*='display: none']) img"
            ).offsetTop;
            let newSelectedItem = document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item img.item-selected"
            ).offsetTop;
            let itemHeight = document.querySelector(
              "div.tab-pane-items[id^=v-pills-].show.active ul.ul-item-list li.li-item img.item-selected"
            ).offsetHeight;

            if (newSelectedItem - firstVisibleItem < divTop) {
              document.querySelector(
                "div.tab-pane-items[id^=v-pills-].show.active"
              ).scrollTop = newSelectedItem - firstVisibleItem;
            } else if (
              newSelectedItem + itemHeight - firstVisibleItem >
              divTop + divHeight
            ) {
              document.querySelector(
                "div.tab-pane-items[id^=v-pills-].show.active"
              ).scrollTop =
                newSelectedItem - firstVisibleItem + itemHeight - divHeight + 4;
            }
          }, 10);
        }
      }
    });
  },
  methods: {
    ...mapMutations(["SAVE_CHARACTER", "RESET_CHARACTER"]),
    loadLocalStorage: function () {
      let character = localStorage.getItem("character");

      if (character != null) {
        this.SAVE_CHARACTER(JSON.parse(character));
      } else {
        this.RESET_CHARACTER();
      }
    },
    updatePanelUrls: function () {
      if (this.$store.state.headgear_top_item.id !== 0) {
        this.item_top_src = `https://static.divine-pride.net/images/items/item/${this.$store.state.headgear_top_item.id}.png`;
      }
      if (this.$store.state.headgear_mid_item.id !== 0) {
        this.item_mid_src = `https://static.divine-pride.net/images/items/item/${this.$store.state.headgear_mid_item.id}.png`;
      }
      if (this.$store.state.headgear_bottom_item.id !== 0) {
        this.item_bot_src = `https://static.divine-pride.net/images/items/item/${this.$store.state.headgear_bottom_item.id}.png`;
      }
      if (this.$store.state.garment_item.id !== 0) {
        this.item_garmet_src = `https://static.divine-pride.net/images/items/item/${this.$store.state.garment_item.id}.png`;
      }
    },
  },
  watch: {
    "$store.state.headgear_top_item.id": {
      deep: true,
      handler(newValue, oldValue) {
        this.item_top_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`;
      },
    },
    "$store.state.headgear_mid_item.id": {
      deep: true,
      handler(newValue, oldValue) {
        this.item_mid_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`;
      },
    },
    "$store.state.headgear_bottom_item.id": {
      deep: true,
      handler(newValue, oldValue) {
        this.item_bot_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`;
      },
    },
    "$store.state.garment_item.id": {
      deep: true,
      handler(newValue, oldValue) {
        this.item_garmet_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`;
      },
    },
  },
};
</script>
<style scoped>
.item-list {
  padding: 10px;
}

.bg-gradient-ragnarok {
  background-image: linear-gradient(
    135deg,
    rgba(231, 231, 255, 1) 0%,
    rgba(255, 231, 231, 1) 35%,
    rgba(225, 255, 254, 1) 100%
  );
  padding: 5px;
}

.bg-gradient-ragnarok-border {
  border: solid 1px #dddddd;
  border-radius: 5px;
}

.ragnarok-card {
  padding: 10px;
}

.card-job-shadow {
  -webkit-box-shadow: 0px 0px 2px 5px #cddefb;
  box-shadow: 0px 0px 2px 5px #cddefb;
}

.card-job-inner {
  border: 1px dashed #4bb1f5;
  border-radius: 6px;
}

.tab-pane-items {
  max-height: 320px;
  overflow-y: scroll;
}

.character-box {
  width: 100%;
  height: 200px;
}

.container-character {
  min-height: 90vh;
}

.btn-tab-item {
  position: relative;
  width: 130px;
  min-height: 75px;
  border: 1px solid #d8d8d8 !important;
  margin-bottom: 3px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 5px;
}

.btn-tab-item img {
  width: 25px;
}

.btn-tab-item label {
  font-size: 12px;
  line-height: 1.1em;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.btn-tab-item span {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 20px;
  background: #e8e8e8;
  color: #5b5b5b;
  border-radius: 5px 0 0 5px;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.btn-tab-item.active span {
  color: #fff;
  background: var(--bs-nav-pills-link-active-bg);
}

.helper {
  border-top: 1px solid #eee;
  margin: 10px 30px 10px 1rem;
  font-size: 12px;
  padding-top: 5px;
  color: #7e7e7e;
}
</style>
