const src = {
  // pick imgs from the dom

  allImgs: [],
  allImgsDom: document.querySelectorAll(".main-window-imgs"),
  allVideosDom: document.querySelectorAll(".main-window-videos"),

  // ! new added
  allQsDom: document.querySelectorAll(".qs"),


  set() {
    let index = 0;
    this.allItems = {

      // !Template images
      arrowRound: this.allImgsDom[index++],
      blinkArrow: this.allImgsDom[index++],
      laerrow: this.allImgsDom[index++],
      laerrow2: this.allImgsDom[index++],
      logo: this.allImgsDom[index++],
      man: this.allImgsDom[index++],
      measurearrow: this.allImgsDom[index++],
      measurearrow2: this.allImgsDom[index++],
      redsize: this.allImgsDom[index++],                                         
      speech_off_btn: this.allImgsDom[index++],
      speech_on_btn: this.allImgsDom[index++],
      talk_cloud: this.allImgsDom[index++],
      iit_delhi_logo: this.allImgsDom[index++],
      // !Template images end

      // ! Procedure formula Nomenclature images 
      formulas_component_stress:this.allImgsDom[index++],
      formulas_efficiency:this.allImgsDom[index++],
      formulas_ideal:this.allImgsDom[index++],
      formulas_nomenclautre:this.allImgsDom[index++],
      formulas_non_ideal:this.allImgsDom[index++],
      formulas_procedure:this.allImgsDom[index++],
      formulas_universal:this.allImgsDom[index++],
      // ! Procedure formula Nomenclature images end

      //! EE16 images added here
      btn_delete:this.allImgsDom[index++],
      btn_priciple_of_operation:this.allImgsDom[index++],
      btn_proceed:this.allImgsDom[index++],
      btn_record:this.allImgsDom[index++],
      btn_reset:this.allImgsDom[index++],
      btn_reset_2:this.allImgsDom[index++],
      btn_restart_waveform:this.allImgsDom[index++],
      btn_turn_on_t1:this.allImgsDom[index++],
      btn_turn_on_t2:this.allImgsDom[index++],
      btn_turn_on_t3:this.allImgsDom[index++],
      btn_turn_on_t4:this.allImgsDom[index++],
      btn_turn_on_t5:this.allImgsDom[index++],
      btn_turn_on_t6:this.allImgsDom[index++],
      btn_verify:this.allImgsDom[index++],
      btn_waveforms:this.allImgsDom[index++],
      dotted_big_box:this.allImgsDom[index++],
      dotted_small_box:this.allImgsDom[index++],
      load_1:this.allImgsDom[index++],
      load_2:this.allImgsDom[index++],
      page_0:this.allImgsDom[index++],
      page_1:this.allImgsDom[index++],
      page_2:this.allImgsDom[index++],
      page_3:this.allImgsDom[index++],
      page_4:this.allImgsDom[index++],
      page_5:this.allImgsDom[index++],
      part_1_components:this.allImgsDom[index++],
      part_1_components_connected:this.allImgsDom[index++],
      part_1_text:this.allImgsDom[index++],
      part_1_text_1:this.allImgsDom[index++],
      part_1_text_2:this.allImgsDom[index++],
      part_1_text_3:this.allImgsDom[index++],
      part_1_text_4:this.allImgsDom[index++],
      part_1_text_5:this.allImgsDom[index++],
      part_2_circuit:this.allImgsDom[index++],
      part_2_graph_full_left:this.allImgsDom[index++],
      part_2_graph_full_right:this.allImgsDom[index++],
      tab_0_deg:this.allImgsDom[index++],
      tab_1:this.allImgsDom[index++],
      tab_120_deg:this.allImgsDom[index++],
      tab_150_deg:this.allImgsDom[index++],
      tab_2:this.allImgsDom[index++],
      tab_3:this.allImgsDom[index++],
      tab_30_deg:this.allImgsDom[index++],
      tab_4:this.allImgsDom[index++],
      tab_5:this.allImgsDom[index++],
      tab_60_deg:this.allImgsDom[index++],
      tab_90_deg:this.allImgsDom[index++],
      text_performance_characteristic:this.allImgsDom[index++],      
      big_helper:this.allImgsDom[index++],      
      helper_1:this.allImgsDom[index++],      
      helper_2:this.allImgsDom[index++],      
      helper_3:this.allImgsDom[index++],      
      helper_4:this.allImgsDom[index++],      
      helper_5:this.allImgsDom[index++],      
      helper_6:this.allImgsDom[index++],      
      tab_alpha:this.allImgsDom[index++],      
      part_3_circuit:this.allImgsDom[index++], 
      
      
      small_helper_1:this.allImgsDom[index++],      
      small_helper_2:this.allImgsDom[index++],      
      small_helper_3:this.allImgsDom[index++],      
      small_helper_4:this.allImgsDom[index++],      
      small_helper_5:this.allImgsDom[index++],      
      small_helper_6:this.allImgsDom[index++], 
      
      //for front graph blinking
      dotted_big_box_1:this.allImgsDom[index++],      
      dotted_big_box_2:this.allImgsDom[index++],      
      dotted_big_box_3:this.allImgsDom[index++],      
      dotted_big_box_4:this.allImgsDom[index++],      
      dotted_big_box_5:this.allImgsDom[index++],      
      dotted_big_box_6:this.allImgsDom[index++], 

      //for left side graph blinking
      dotted_small_box_1:this.allImgsDom[index++],      
      dotted_small_box_2:this.allImgsDom[index++],      
      dotted_small_box_3:this.allImgsDom[index++],      
      dotted_small_box_4:this.allImgsDom[index++],      
      dotted_small_box_5:this.allImgsDom[index++],      
      dotted_small_box_6:this.allImgsDom[index++], 
      
      // other images 
      circuit_upper_layer:this.allImgsDom[index++], 

      btn_hint:this.allImgsDom[index++],
      hint_box:this.allImgsDom[index++],
      new_tab:this.allImgsDom[index++],

            //experimental section images added
            beta_line_blinking: this.allImgsDom[index++],
            bnt_click: this.allImgsDom[index++],
            btn_firing_angle: this.allImgsDom[index++],
            btn_input_voltage: this.allImgsDom[index++],
            btn_load_inductance: this.allImgsDom[index++],
            btn_load_resistance: this.allImgsDom[index++],
            circle: this.allImgsDom[index++],
            components_rl_load: this.allImgsDom[index++],
            components_r_load: this.allImgsDom[index++],
            rl_load_click_1: this.allImgsDom[index++],
            rl_load_click_2: this.allImgsDom[index++],
            rl_load_click_3: this.allImgsDom[index++],
            rl_load_click_4: this.allImgsDom[index++],
            r_load_click_1: this.allImgsDom[index++],
            r_load_click_2: this.allImgsDom[index++],
            r_load_click_3: this.allImgsDom[index++],
            r_load_click_4: this.allImgsDom[index++],
            val_a: this.allImgsDom[index++],
            val_l: this.allImgsDom[index++],
            val_r: this.allImgsDom[index++],
            val_v: this.allImgsDom[index++],


      //! EE16 images end here



      // * Question Mark
      domQs1: this.allQsDom[0],
      domQs2: this.allQsDom[1],
      domQs3: this.allQsDom[2],
      domQs4: this.allQsDom[3],
      domQs5: this.allQsDom[4],
      domQs6: this.allQsDom[5],
      
      
      // * Videos
      // yoke_front_to_back: this.allVideosDom[0],
      // yoke_front_to_side: this.allVideosDom[1],
      // panel1: this.allVideosDom[2],
      // panel2: this.allVideosDom[3],

      bfs_video: this.allVideosDom[0],
    };
  },
  allImgsInitialAxis: [],
  get(itemName) {
    return this.allItems[itemName];
  },
};
// setting src
src.set();
