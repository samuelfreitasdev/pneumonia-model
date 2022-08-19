
import React from "react";

import { Container, Card, Form, Spinner, Col, Row } from "react-bootstrap";

class Disclaimer extends React.Component {

    render() {
        return (
            <Card>
                <Card.Header>Aviso!</Card.Header>
                <Card.Body>
                    <p>
                        Esse sistema é apenas uma prova de conceito.
                    </p>
                    <p>
                        Esse sistema foi feito com o objeto de auxiliar no diagnóstico de imagens de raio-x. 
                        Para esse diagnóstico, foi criado um modelo de inteligência artificial treinado para 
                        identificar as seguintes enfermidades: 
                    </p>
                    <ul>
                        <li>
                            "Atelectasia; um quadro clínico no qual a totalidade ou parte de um pulmão fica 
                            sem ar e entra em colapso. A obstrução dos brônquios é uma causa comum de 
                            atelectasia. Pode ocorrer falta de ar se os níveis de oxigênio estiverem 
                            baixos ou em casos de pneumonia."
                            <a href="https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/bronquiectasias-e-atelectasia/atelectasia#:~:text=A%20atelectasia%20%C3%A9%20um%20quadro,ou%20em%20casos%20de%20pneumonia.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "COVID-19; uma infecção respiratória aguda causada pelo coronavírus SARS-CoV-2, 
                            potencialmente grave, de elevada transmissibilidade e de distribuição global."
                            <a href="https://www.gov.br/saude/pt-br/coronavirus/o-que-e-o-coronavirus#:~:text=A%20Covid%2D19%20%C3%A9%20uma,transmissibilidade%20e%20de%20distribui%C3%A7%C3%A3o%20global.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Cardiomegalia; também conhecida como Coração grande e 
                            acomete pacientes que podem estar com outras doenças cardíacas, 
                            como insuficiência, doença das artérias coronárias, doença nas válvulas, 
                            arritmias e até mesmo Doença de Chagas."
                            <a href="https://www.wecor.com.br/cardiomegalia#:~:text=Cardiomegalia%20%C3%A9%20tamb%C3%A9m%20conhecida%20como,at%C3%A9%20mesmo%20Doen%C3%A7a%20de%20Chagas.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Consolidação pulmonar;  definida como a substituição do ar 
                            dos alvéolos por líquido, células ou a combinação destes dois. 
                            Nos exames radiológicos estas alterações se caracterizam por 
                            imagens opacas, causando apagamento dos vasos pulmonares, sem perda 
                            significativa de volume do segmento afetado."
                            <a href="https://dapi.com.br/wp-content/uploads/2018/11/bases-radiologicas-das-doencas-toracicas.pdf">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Edema pulmonar; uma situação de emergência, quando há acúmulo de 
                            líquido dentro dos pulmões. Essa situação diminui as trocas de 
                            gasosas do pulmão, causando dificuldade de respiração e sensação 
                            de afogamento. A condição também é chamada de edema agudo do pulmão 
                            ou simplesmente “água no pulmão”."
                            <a href="https://www.rededorsaoluiz.com.br/doencas/edema-pulmonar">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Efusão pleural: é a acumulação de líquido entre o pulmão e a parede torácica. 
                            A pleura é uma membrana fina que reveste o interior da parede torácica e 
                            cobre os pulmões. Normalmente existe uma pequena quantidade de fluido 
                            entre as duas camadas de pleura."
                            <a href="https://drauziovarella.uol.com.br/doencas-e-sintomas/derrame-pleural-agua-na-pleura/#:~:text=Entre%20as%20duas%20pleuras%2C%20existe,visceral%20e%20a%20pleura%20parietal.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Enfisema pulmonar; uma doença degenerativa, que geralmente se 
                            desenvolve depois de muitos anos de agressão aos tecidos do pulmão 
                            devido ao cigarro e outras toxinas no ar. 
                            Causa: Fumar cigarro é a causa principal"
                            <a href="https://www.saude.go.gov.br/biblioteca/7609-enfisema-pulmonar#:~:text=Descri%C3%A7%C3%A3o%3A%20O%20enfisema%20pulmonar%20%C3%A9,cigarro%20%C3%A9%20a%20causa%20principal.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            Infiltration
                        </li>
                        <li>
                            "Câncer; doença em que as células anormais se dividem incontrolavelmente 
                            e destroem o tecido do corpo."
                            <a href="https://www.inca.gov.br/o-que-e-cancer">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Nódulo pulmonar; um termo amplo que designa alterações radiológicas 
                            detectadas em exames de imagem do pulmão. Ele é uma lesão sólida 
                            ou em vidro fosco, normalmente arredondada e com menos de 3 
                            centímetros de diâmetro. É importante buscar orientação médica 
                            diante do aparecimento de um desses nódulos."
                            <a href="https://www.cdra.com.br/nodulo-no-pulmao#:~:text=N%C3%B3dulo%20pulmonar%20%C3%A9%20um%20termo,aparecimento%20de%20um%20desses%20n%C3%B3dulos.">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Espessamento pleural difuso; é uma doença da pleura visceral. 
                            Não é específico da exposição ao asbesto e pode aparecer como seqüela de uma 
                            reação inflamatória relacionada, por exemplo, com tuberculose, cirurgia torácica, 
                            hemotórax decorrente de traumas ou reação a drogas."
                            <a href="https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/doen%C3%A7as-da-pleura-e-do-mediastino/derrame-pleural">
                                [REF]
                            </a>
                        </li>
                        <li>
                            "Pneumotórax; é a presença de ar entre as duas camadas da pleura 
                            (membrana fina, transparente, de duas camadas que reveste os pulmões 
                            e o interior da parede torácica), resultando em colapso parcial 
                            ou total do pulmão. Os sintomas incluem dificuldade respiratória e dor torácica."
                            <a href="https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/doen%C3%A7as-da-pleura-e-do-mediastino/pneumot%C3%B3rax#:~:text=Pneumot%C3%B3rax%20%C3%A9%20a%20presen%C3%A7a%20de,dificuldade%20respirat%C3%B3ria%20e%20dor%20tor%C3%A1cica.">
                                [REF]
                            </a>
                        </li>
                    </ul>

                    <p>
                        O treinamento foi feito usando imagens diagnosticadas de bases de dados abertas na internet:
                    </p>

                    <ul>
                        <li>https://github.com/ieee8023/covid-chestxray-dataset</li>
                        <li>https://radiopaedia.org/?lang=us</li>
                        <li>https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia</li>
                        <li>https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data</li>
                        <li>https://github.com/ieee8023/covid-chestxray-dataset</li>
                        <li>https://www.kaggle.com/neilturley/nihcc-chest-xray</li>
                    </ul>

                </Card.Body>
            </Card>
        );
    }

}

export default Disclaimer;