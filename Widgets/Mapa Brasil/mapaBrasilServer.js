(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
      data.notes = [];
      
      //Captura os dados da tabela
      var noteGR = new GlideRecord('x_bdb_5wf_00000476_sisee_gd_economia_usina');
      //noteGR.addQuery('user', gs.getUser().getID());
      //noteGR.addQuery('Usina', VALOR VINDO DO CLIENT);
  
      //Ordena a tabela
      noteGR.orderByDesc('number');
      //noteGR.orderByDesc('usina');
  
      noteGR.query();
      while(noteGR.next()){
          var noteObj = {};
  
          //Copia os dados do GlideRecord para o objeto noteObj
          $sp.getRecordDisplayValues(noteObj, noteGR, 'number,fiscal,sys_id');
          //$sp.getRecordDisplayValues(noteObj, noteGR, 'usina,custo usina, economia');
  
          //Insere os dados copiados dentro do Array
          data.notes.push(noteObj);
      }
  })();