(this["webpackJsonpwebsite-3"]=this["webpackJsonpwebsite-3"]||[]).push([[0],{269:function(e,a,t){},270:function(e,a,t){},275:function(e,a){},276:function(e,a){},284:function(e,a){},287:function(e,a){},288:function(e,a){},289:function(e,a){},294:function(e,a,t){"use strict";t.r(a);var i=t(21),s=t.n(i),o=t(236),r=t.n(o),n=(t(269),t(7)),c=t(11),d=t(5),l=t(6),u=t(50),m=t(13),p=t(14),b=(t(270),t(295)),h=t(299),j=t(296),f=t(298),x=t(297),g=t(260),O=t(262),v=t(261),C=t(211),w=["Atelectasis","COVID-19","Cardiomegaly","Consolidation","Edema","Effusion","Emphysema","Infiltration","Mass","Nodule","Pleural Thickening","Pneumothorax"],y=function(){function e(){Object(d.a)(this,e),this.MODEL_CLASSES=["Atelectasis","COVID-19","Cardiomegaly","Consolidation","Edema","Effusion","Emphysema","Infiltration","Mass","Nodule","Pleural Thickening","Pneumothorax"],this.model=null}return Object(l.a)(e,[{key:"init",value:function(){var e=Object(c.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.b("https://model.samuelfreitas.com.br/model.json");case 2:this.model=e.sent,console.log("Model loaded.");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"predict",value:function(){var e=Object(c.a)(Object(n.a)().mark((function e(a){var t,i,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.fromPixels(a).resizeNearestNeighbor([224,224]).mean(2).toFloat().expandDims(-1).reshape([1,224,224,1]),e.next=3,this.model.predict(t).data();case 3:return i=e.sent,s=this.getClassNames(i),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getClassNames",value:function(e){return Array.from(e).map((function(e,a){return{name:w[a],probability:100*e,toLabel:w[a]+": "+100*e+"%"}})).sort((function(e,a){return a.probability-e.probability})).slice(0,3)}}]),e}(),A=t(212),E=t(259),F=t(19),k=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).state={predictions:e.predictions},i}return Object(l.a)(t,[{key:"buildList",value:function(e){var a=this;return e.map((function(e){return a.buildItem(e)}))}},{key:"buildItem",value:function(e){return e.probability<.1&&e.probability>0&&(e.probability=.1),Object(F.jsxs)(A.a.Item,{children:[e.name," - Probabilidade: ",Math.round(100*(e.probability+Number.EPSILON))/100," %",Object(F.jsx)(E.a,{striped:!0,variant:"success",now:e.probability})]},e.name)}},{key:"render",value:function(){return Object(F.jsx)(A.a,{children:this.buildList(this.state.predictions)})}}]),t}(s.a.Component),q=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(F.jsxs)(h.a,{children:[Object(F.jsx)(h.a.Header,{children:"Aviso!"}),Object(F.jsxs)(h.a.Body,{children:[Object(F.jsx)("p",{children:"Esse sistema \xe9 apenas uma prova de conceito."}),Object(F.jsx)("p",{children:"Esse sistema foi feito com o objeto de auxiliar no diagn\xf3stico de imagens de raio-x. Para esse diagn\xf3stico, foi criado um modelo de intelig\xeancia artificial treinado para identificar as seguintes enfermidades:"}),Object(F.jsxs)("ul",{children:[Object(F.jsxs)("li",{children:['"Atelectasia; um quadro cl\xednico no qual a totalidade ou parte de um pulm\xe3o fica sem ar e entra em colapso. A obstru\xe7\xe3o dos br\xf4nquios \xe9 uma causa comum de atelectasia. Pode ocorrer falta de ar se os n\xedveis de oxig\xeanio estiverem baixos ou em casos de pneumonia."',Object(F.jsx)("a",{href:"https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/bronquiectasias-e-atelectasia/atelectasia#:~:text=A%20atelectasia%20%C3%A9%20um%20quadro,ou%20em%20casos%20de%20pneumonia.",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"COVID-19; uma infec\xe7\xe3o respirat\xf3ria aguda causada pelo coronav\xedrus SARS-CoV-2, potencialmente grave, de elevada transmissibilidade e de distribui\xe7\xe3o global."',Object(F.jsx)("a",{href:"https://www.gov.br/saude/pt-br/coronavirus/o-que-e-o-coronavirus#:~:text=A%20Covid%2D19%20%C3%A9%20uma,transmissibilidade%20e%20de%20distribui%C3%A7%C3%A3o%20global.",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Cardiomegalia; tamb\xe9m conhecida como Cora\xe7\xe3o grande e acomete pacientes que podem estar com outras doen\xe7as card\xedacas, como insufici\xeancia, doen\xe7a das art\xe9rias coron\xe1rias, doen\xe7a nas v\xe1lvulas, arritmias e at\xe9 mesmo Doen\xe7a de Chagas."',Object(F.jsx)("a",{href:"https://www.wecor.com.br/cardiomegalia#:~:text=Cardiomegalia%20%C3%A9%20tamb%C3%A9m%20conhecida%20como,at%C3%A9%20mesmo%20Doen%C3%A7a%20de%20Chagas.",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Consolida\xe7\xe3o pulmonar;  definida como a substitui\xe7\xe3o do ar dos alv\xe9olos por l\xedquido, c\xe9lulas ou a combina\xe7\xe3o destes dois. Nos exames radiol\xf3gicos estas altera\xe7\xf5es se caracterizam por imagens opacas, causando apagamento dos vasos pulmonares, sem perda significativa de volume do segmento afetado."',Object(F.jsx)("a",{href:"https://dapi.com.br/wp-content/uploads/2018/11/bases-radiologicas-das-doencas-toracicas.pdf",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Edema pulmonar; uma situa\xe7\xe3o de emerg\xeancia, quando h\xe1 ac\xfamulo de l\xedquido dentro dos pulm\xf5es. Essa situa\xe7\xe3o diminui as trocas de gasosas do pulm\xe3o, causando dificuldade de respira\xe7\xe3o e sensa\xe7\xe3o de afogamento. A condi\xe7\xe3o tamb\xe9m \xe9 chamada de edema agudo do pulm\xe3o ou simplesmente \u201c\xe1gua no pulm\xe3o\u201d."',Object(F.jsx)("a",{href:"https://www.rededorsaoluiz.com.br/doencas/edema-pulmonar",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Efus\xe3o pleural: \xe9 a acumula\xe7\xe3o de l\xedquido entre o pulm\xe3o e a parede tor\xe1cica. A pleura \xe9 uma membrana fina que reveste o interior da parede tor\xe1cica e cobre os pulm\xf5es. Normalmente existe uma pequena quantidade de fluido entre as duas camadas de pleura."',Object(F.jsx)("a",{href:"https://drauziovarella.uol.com.br/doencas-e-sintomas/derrame-pleural-agua-na-pleura/#:~:text=Entre%20as%20duas%20pleuras%2C%20existe,visceral%20e%20a%20pleura%20parietal.",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Enfisema pulmonar; uma doen\xe7a degenerativa, que geralmente se desenvolve depois de muitos anos de agress\xe3o aos tecidos do pulm\xe3o devido ao cigarro e outras toxinas no ar. Causa: Fumar cigarro \xe9 a causa principal"',Object(F.jsx)("a",{href:"https://www.saude.go.gov.br/biblioteca/7609-enfisema-pulmonar#:~:text=Descri%C3%A7%C3%A3o%3A%20O%20enfisema%20pulmonar%20%C3%A9,cigarro%20%C3%A9%20a%20causa%20principal.",children:"[REF]"})]}),Object(F.jsx)("li",{children:"Infiltration"}),Object(F.jsxs)("li",{children:['"C\xe2ncer; doen\xe7a em que as c\xe9lulas anormais se dividem incontrolavelmente e destroem o tecido do corpo."',Object(F.jsx)("a",{href:"https://www.inca.gov.br/o-que-e-cancer",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"N\xf3dulo pulmonar; um termo amplo que designa altera\xe7\xf5es radiol\xf3gicas detectadas em exames de imagem do pulm\xe3o. Ele \xe9 uma les\xe3o s\xf3lida ou em vidro fosco, normalmente arredondada e com menos de 3 cent\xedmetros de di\xe2metro. \xc9 importante buscar orienta\xe7\xe3o m\xe9dica diante do aparecimento de um desses n\xf3dulos."',Object(F.jsx)("a",{href:"https://www.cdra.com.br/nodulo-no-pulmao#:~:text=N%C3%B3dulo%20pulmonar%20%C3%A9%20um%20termo,aparecimento%20de%20um%20desses%20n%C3%B3dulos.",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Espessamento pleural difuso; \xe9 uma doen\xe7a da pleura visceral. N\xe3o \xe9 espec\xedfico da exposi\xe7\xe3o ao asbesto e pode aparecer como seq\xfcela de uma rea\xe7\xe3o inflamat\xf3ria relacionada, por exemplo, com tuberculose, cirurgia tor\xe1cica, hemot\xf3rax decorrente de traumas ou rea\xe7\xe3o a drogas."',Object(F.jsx)("a",{href:"https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/doen%C3%A7as-da-pleura-e-do-mediastino/derrame-pleural",children:"[REF]"})]}),Object(F.jsxs)("li",{children:['"Pneumot\xf3rax; \xe9 a presen\xe7a de ar entre as duas camadas da pleura (membrana fina, transparente, de duas camadas que reveste os pulm\xf5es e o interior da parede tor\xe1cica), resultando em colapso parcial ou total do pulm\xe3o. Os sintomas incluem dificuldade respirat\xf3ria e dor tor\xe1cica."',Object(F.jsx)("a",{href:"https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/doen%C3%A7as-da-pleura-e-do-mediastino/pneumot%C3%B3rax#:~:text=Pneumot%C3%B3rax%20%C3%A9%20a%20presen%C3%A7a%20de,dificuldade%20respirat%C3%B3ria%20e%20dor%20tor%C3%A1cica.",children:"[REF]"})]})]}),Object(F.jsx)("p",{children:"O treinamento foi feito usando imagens diagnosticadas de bases de dados abertas na internet:"}),Object(F.jsxs)("ul",{children:[Object(F.jsx)("li",{children:"https://github.com/ieee8023/covid-chestxray-dataset"}),Object(F.jsx)("li",{children:"https://radiopaedia.org/?lang=us"}),Object(F.jsx)("li",{children:"https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia"}),Object(F.jsx)("li",{children:"https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data"}),Object(F.jsx)("li",{children:"https://github.com/ieee8023/covid-chestxray-dataset"}),Object(F.jsx)("li",{children:"https://www.kaggle.com/neilturley/nihcc-chest-xray"})]})]})]})}}]),t}(s.a.Component),B=q,I=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).modelClassifier=new y,i.state={isModelLoaded:!1,imageSrc:"",showImagePreview:!1,predictions:[]},i.onFileChange=i.onFileChange.bind(Object(u.a)(i)),i.predict=i.predict.bind(Object(u.a)(i)),i}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.modelClassifier.init(),this.setState({isModelLoaded:!0})}},{key:"onFileChange",value:function(e){var a=this,t=e.target.files[0],i=new FileReader,s=i.readAsDataURL(t);i.onloadend=function(e){s=e.target.result,a.setState({imageSrc:s,showImagePreview:!0})}}},{key:"predict",value:function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var a,t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById("img-preview"),e.next=3,this.modelClassifier.predict(a);case 3:t=e.sent,this.setState({predictions:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(F.jsxs)(b.a,{style:{marginTop:"20px"},children:[Object(F.jsx)(B,{}),!this.state.isModelLoaded&&Object(F.jsx)(h.a,{style:{marginTop:"20px",marginBottom:"20px"},children:Object(F.jsxs)(h.a.Body,{style:{display:"inline-flex",alignItems:"center"},children:[Object(F.jsx)(j.a,{animation:"border"}),Object(F.jsx)("span",{style:{marginLeft:"10px"},children:"Carregando o sistema..."})]})}),Object(F.jsxs)(h.a,{children:[Object(F.jsx)(h.a.Header,{children:Object(F.jsx)("strong",{children:"Analisador de Raio-X"})}),Object(F.jsxs)(h.a.Body,{children:[Object(F.jsxs)(f.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(F.jsx)(f.a.Label,{children:"Escolha uma imagem de Raio-X."}),Object(F.jsx)(f.a.Control,{type:"file",onChange:this.onFileChange})]}),Object(F.jsx)(v.a,{variant:"primary",type:"submit",style:{marginBottom:"20px"},onClick:this.predict,children:" Diagnosticar "}),this.state.showImagePreview&&Object(F.jsxs)(x.a,{children:[Object(F.jsx)(g.a,{children:Object(F.jsx)(O.a,{id:"img-preview",src:this.state.imageSrc,rounded:!0,width:"300",height:"300"})}),Object(F.jsx)(g.a,{children:this.state.predictions.length>0&&Object(F.jsx)(k,{predictions:this.state.predictions})})]})]})]})]})}}]),t}(s.a.Component),P=I,R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,300)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),i(e),s(e),o(e),r(e)}))};t(293);r.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(P,{})}),document.getElementById("root")),R()}},[[294,1,2]]]);
//# sourceMappingURL=main.9d12bc08.chunk.js.map