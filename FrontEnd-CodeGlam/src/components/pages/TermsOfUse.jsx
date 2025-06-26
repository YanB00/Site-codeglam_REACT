// src/components/pages/TermsOfUse.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style from './TermsOfUse.module.css'; // Vamos criar este CSS

const TermsOfUse = () => {
  return (
    <div className={style['terms-page']}>
      <main className={style['terms-container']}>
        <div className={style['terms-content']}>
          <h1>TERMO DE USO – CodeGlam</h1>

          <p><strong>1. ACEITAÇÃO DOS TERMOS</strong></p>
          <p>Ao utilizar a plataforma CodeGlam, você concorda integralmente com os termos e condições aqui estabelecidos. Caso não concorde com qualquer parte deste termo, não utilize o serviço.</p>

          <p><strong>2. DEFINIÇÕES</strong></p>
          <p><strong>Plataforma:</strong> Sistema online de gerenciamento de agendamentos e serviços de salões de beleza, acessível via web e aplicativos móveis.</p>
          <p><strong>Salão:</strong> Estabelecimento comercial cadastrado na plataforma que oferece serviços de beleza.</p>
          <p><strong>Cliente:</strong> Usuário que utiliza a plataforma para agendar serviços em salões cadastrados.</p>
          <p><strong>Profissional:</strong> Prestador de serviço de beleza vinculado a um salão cadastrado na plataforma.</p>
          <p><strong>Conteúdo do Usuário:</strong> Quaisquer informações, dados, textos, fotos, vídeos ou outros materiais que os usuários (salões, clientes ou profissionais) compartilham na plataforma.</p>

          <p><strong>3. RESPONSABILIDADES DO SALÃO</strong></p>
          <p><strong>Cadastro e Manutenção:</strong> O salão é responsável por manter seus dados cadastrais, horários de funcionamento, serviços oferecidos e preços sempre atualizados na plataforma.</p>
          <p><strong>Compromisso com Agendamentos:</strong> O salão deve honrar todos os agendamentos confirmados através da plataforma, prestando os serviços conforme descrito. Em caso de imprevistos, o salão deve notificar o cliente com a maior antecedência possível, oferecendo alternativas de reagendamento ou cancelamento.</p>
          <p><strong>Política de Cancelamento:</strong> O salão pode definir suas próprias regras para reagendamentos e cancelamentos, desde que estas sejam claramente comunicadas aos clientes no momento do agendamento.</p>
          <p><strong>Proteção de Dados:</strong> O salão se compromete a não compartilhar informações pessoais dos clientes com terceiros sem autorização expressa, em conformidade com a legislação de proteção de dados aplicável.</p>
          <p><strong>Qualidade dos Serviços:</strong> O salão é o único responsável pela qualidade e segurança dos serviços prestados aos clientes agendados pela plataforma.</p>

          <p><strong>4. PAGAMENTOS</strong></p>
          <p><strong>4.1. Formas de Pagamento:</strong> A plataforma CodeGlam aceita pagamentos via cartão de crédito (Visa, Mastercard, etc.), boleto bancário, PIX e outras formas que venham a ser implementadas.</p>
          <p><strong>4.2. Processamento:</strong> Os pagamentos são processados através de plataformas de pagamento seguras (ex: GetNet), que garantem a proteção das transações e dos dados financeiros dos usuários.</p>
          <p><strong>4.3. Taxas:</strong> O salão poderá definir taxas de cancelamento ou outras cobranças adicionais, desde que estas sejam informadas de forma clara e transparente ao cliente antes da confirmação do agendamento.</p>
          <p><strong>4.4. Reembolsos:</strong> As políticas de reembolso serão definidas por cada salão, e deverão ser informadas aos clientes. A plataforma CodeGlam não se responsabiliza por reembolsos, essa ação é de responsabilidade do salão.</p>
          <p><strong>4.5. Promoções e Descontos:</strong> Salões podem oferecer promoções e descontos através da plataforma, sendo responsáveis por definir as regras e condições de cada oferta.</p>

          <p><strong>5. RESPONSABILIDADES DO CLIENTE</strong></p>
          <p><strong>Informações Verídicas:</strong> O cliente deve fornecer informações corretas e completas ao se cadastrar na plataforma e ao realizar agendamentos.</p>
          <p><strong>Respeito aos Agendamentos:</strong> O cliente deve comparecer aos agendamentos confirmados ou cancelá-los dentro do prazo estipulado pelo salão.</p>
          <p><strong>Feedback Honesto:</strong> O cliente pode avaliar os serviços recebidos, fornecendo feedback honesto e construtivo, baseado em sua experiência real.</p>
          <p><strong>Uso Adequado da Plataforma:</strong> O cliente se compromete a utilizar a plataforma de forma ética e legal, abstendo-se de qualquer tentativa de fraude, uso de linguagem ofensiva ou outras condutas inadequadas.</p>

          <p><strong>6. REGRAS GERAIS DA PLATAFORMA</strong></p>
          <p><strong>Uso Permitido:</strong> A plataforma CodeGlam destina-se exclusivamente ao agendamento e gestão de serviços de beleza. Qualquer outro uso é estritamente proibido.</p>
          <p><strong>Modificações no Serviço:</strong> A plataforma CodeGlam reserva-se o direito de modificar, suspender ou descontinuar qualquer funcionalidade ou serviço, a qualquer momento, mediante aviso prévio aos usuários.</p>
          <p><strong>Segurança e Privacidade:</strong> A plataforma CodeGlam implementa medidas de segurança para proteger as informações dos usuários, em conformidade com a <Link to="/privacy-policy">Política de Privacidade</Link></p> 
          <p><strong>Propriedade Intelectual:</strong> Todo o conteúdo da plataforma (textos, imagens, logotipos, etc.) é de propriedade exclusiva da CodeGlam ou de seus licenciadores, sendo proibida a reprodução ou uso sem autorização.</p>
          <p><strong>Conteúdo do Usuário:</strong> Ao compartilhar conteúdo na plataforma, o usuário concede à CodeGlam o direito de utilizá-lo para fins de operação e divulgação da plataforma, respeitando sempre a privacidade do usuário.</p>

          <p><strong>7. CANCELAMENTO E EXCLUSÃO DE CONTA</strong></p>
          <p><strong>Para Salões:</strong> O salão pode solicitar a desativação de sua conta através do suporte da plataforma, desde que todos os agendamentos pendentes sejam concluídos ou cancelados.</p>
          <p><strong>Para Clientes:</strong> O cliente pode excluir sua conta a qualquer momento, mas perderá o acesso ao histórico de agendamentos e outras informações.</p>
          <p><strong>Cancelamento por Violação:</strong> A plataforma CodeGlam reserva-se o direito de cancelar ou suspender contas de usuários que violarem este Termo de Uso ou outras políticas da plataforma.</p>

          <p><strong>8. DISPOSIÇÕES FINAIS</strong></p>
          <p><strong>Alterações no Termo:</strong> Este Termo de Uso poderá ser atualizado periodicamente, mediante aviso prévio aos usuários. O uso contínuo da plataforma após as alterações implica na aceitação dos novos termos.</p>
          <p><strong>Lei Aplicável e Foro:</strong> Este Termo de Uso será regido e interpretado de acordo com as leis da República Federativa do Brasil. Qualquer disputa relacionada a este termo será submetida ao foro da comarca da cidade de São Paulo, estado de São Paulo.</p>
          <p><strong>Contato:</strong> Em caso de dúvidas ou sugestões, entre em contato com o suporte da plataforma através do e-mail innobytecodeglam@gmail.com.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;