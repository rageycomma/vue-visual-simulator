import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import itemsEn from "@/db/itemsEn.json";
import itemsPt from "@/db/itemsPt.json";
export default createStore({
  state: {
    ui: {
      language: 'en',
      jsonFile: itemsEn
    },
    character: {
      gender: 1,
      job: ["0"],
      head: 1,
      headPalette: 1,
      headdir: 0,
      headgear: [0, 0, 0],
      garment: 0,
      bodyPalette: 0,
      action: 0,
      canvas: "200x200+100+150",
      outfit: 0,
    },
    headgear_type: {
      isTop: false,
      isMid: false,
      isBot: false,
      isGarment: false,
    },
    headgear_top_item: {},
    headgear_mid_item: {},
    headgear_bottom_item: {},
    garment_item: {},
    cash_mount_checked: 0,
    regular_mount_checked: 0,
  },
  getters: {
    getJsonItems (state) {
      return state.ui.jsonFile;
    }
  },
  mutations: {
    SAVE_LANGUAGE(state, language) {
      state.ui.language = language;
      if (language === 'pt') {
        state.ui.jsonFile = itemsPt;
      } else {
        state.ui.jsonFile = itemsEn;
      }

      state.headgear_bottom_item = state.ui.jsonFile.find(item => item.id === state.headgear_bottom_item?.id) || {};
      state.headgear_mid_item = state.ui.jsonFile.find(item => item.id === state.headgear_mid_item?.id) || {};
      state.headgear_top_item = state.ui.jsonFile.find(item => item.id === state.headgeheadgear_top_itemar_mid_item?.id) || {};
      state.garment_item = state.ui.jsonFile.find(item => item.id === state.garment_item?.id) || {};
    },
    SAVE_ITEMDB(state, jsonFile) {
      state.ui.jsonFile = jsonFile;
    },
    SAVE_GENDER(state, gender) {
      state.character.gender = gender;
    },
    SAVE_HAIR_COLOR(state, id) {
      state.character.headPalette = id - 1;
    },
    SAVE_HEAD(state, id) {
      state.character.head = id;
    },
    SAVE_BODY_PALETTE(state, id) {
      state.character.bodyPalette = id;
    },
    SAVE_JOB(state, id) {
      state.character.job[0] = id.toString();
    },
    SAVE_HEADGEAR_TOP(state, viewID) {
      state.character.headgear[1] = viewID;
    },
    SAVE_HEADGEAR_TOP_ITEM(state, item) {
      state.headgear_top_item = item;
    },
    SAVE_HEADGEAR_MID(state, viewID) {
      state.character.headgear[2] = viewID;
    },
    SAVE_HEADGEAR_MID_ITEM(state, item) {
      state.headgear_mid_item = item;
    },
    SAVE_HEADGEAR_BOTTOM(state, viewID) {
      state.character.headgear[0] = viewID;
    },
    SAVE_HEADGEAR_BOTTOM_ITEM(state, item) {
      state.headgear_bottom_item = item;
    },
    SAVE_GARMENT(state, viewID) {
      state.character.garment = viewID;
    },
    SAVE_GARMENT_ITEM(state, item) {
      state.garment_item = item;
    },
    SAVE_CHARACTER_POSITION(state, side) {
      if (side == "left") {
        let action = (state.character.action + 1) % 8;
        if (action == 0) {
          state.character.action -= 7;
        } else {
          state.character.action++;
        }
      } else {
        let action = state.character.action % 8;
        if (action == 0) {
          state.character.action += 7;
        } else {
          state.character.action--;
        }
      }
    },
    SAVE_CHARACTER_HEAD(state, side) {
      let positions = [1, 0, 2];
      let current_head_position = state.character.headdir;
      let index = positions.findIndex(
        (index) => index == current_head_position
      );
      if (side == "right") {
        if (index > 0) index--;
        state.character.headdir = positions[index];
      } else {
        if (index < 2) index++;
        state.character.headdir = positions[index];
      }
    },
    SAVE_ACTION(state, id) {
      let action = (state.character.action + 1) % 8;
      state.character.action = id + action - 1;
      if (state.character.action < 0) state.character.action = 0;
    },
    SAVE_OUTFIT(state, checked) {
      if (checked) {
        state.character.outfit = 1;
      } else {
        state.character.outfit = 0;
      }
    },
    SAVE_CASH_MOUNT(state, checked) {
      if (checked) {
        state.cash_mount_checked = 1;
      } else {
        state.cash_mount_checked = 0;
      }
    },
    SAVE_REGULAR_MOUNT(state, checked) {
      if (checked) {
        state.regular_mount_checked = 1;
      } else {
        state.regular_mount_checked = 0;
      }
    },
    RESET_CHARACTER(state) {
      state.character.gender = 1;
      state.character.job = ["0"];
      state.character.head = 1;
      state.character.headPalette = 1;
      state.character.headgear = [0, 0, 0];
      state.character.garment = 0;
      state.character.bodyPalette = 0;
      state.character.action = 0;
      state.character.outfit = 0;
      state.character.headdir = 0;
    },
    SAVE_CHARACTER(state, character) {
      state.character = character;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
