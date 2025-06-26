import React from 'react';
import style from './PrivatePolicy.module.css'; 
import { Link } from 'react-router-dom'; 

const PrivacyPolicy = () => {
  return (
    <div className={style['privacy-page']}>
      <main className={style['privacy-container']}>
        <div className={style['privacy-content']}>
          <h1>POLÍTICA DE PRIVACIDADE – CodeGlam</h1>

          <p><strong>1. INTRODUÇÃO</strong></p>
          <p>A privacidade dos usuários é de extrema importância para a CodeGlam. Esta Política de Privacidade detalha como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma.</p>

          <p><strong>2. INFORMAÇÕES COLETADAS</strong></p>
          <p><strong>Dados de Cadastro:</strong></p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone (incluindo WhatsApp, se aplicável)</li>
            <li>CPF</li>
            <li>Endereço residencial ou comercial</li>
            <li>Senha criptografada</li>
          </ul>
          <p><strong>Dados de Agendamento:</strong></p>
          <ul>
            <li>Serviços solicitados</li>
            <li>Datas e horários dos agendamentos</li>
            <li>Histórico de atendimentos</li>
            <li>Preferências de serviços</li>
          </ul>
          <p><strong>Dados de Pagamento:</strong></p>
          <ul>
            <li>Informações de cartão de crédito/débito (processadas por terceiros seguros)</li>
            <li>Histórico de transações</li>
            <li>Dados de faturamento</li>
          </ul>
          <p><strong>Dados de Navegação e Dispositivo:</strong></p>
          <ul>
            <li>Endereço IP</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Cookies e tecnologias similares</li>
            <li>Registros de acesso e atividades na plataforma</li>
            <li>Informações de localização (com consentimento)</li>
          </ul>
          <p><strong>Dados de Comunicação:</strong></p>
          <ul>
            <li>Registros de interações com o suporte ao cliente</li>
            <li>Feedback e avaliações de serviços</li>
          </ul>

          <p><strong>3. USO DAS INFORMAÇÕES</strong></p>
          <p>As informações coletadas são utilizadas para:</p>
          <ul>
            <li>Criar e gerenciar contas de usuários</li>
            <li>Processar e confirmar agendamentos</li>
            <li>Facilitar e processar pagamentos</li>
            <li>Personalizar a experiência do usuário com base em preferências e histórico</li>
            <li>Fornecer suporte ao cliente e responder a solicitações</li>
            <li>Enviar lembretes de agendamentos e informações relevantes</li>
            <li>Melhorar a segurança da plataforma e prevenir fraudes</li>
            <li>Enviar comunicações de marketing e promocionais (com opção de opt-out)</li>
            <li>Realizar análises e pesquisas para aprimorar nossos serviços.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <p><strong>4. COMPARTILHAMENTO DE DADOS</strong></p>
          <p>Não vendemos ou alugamos seus dados pessoais. O compartilhamento ocorre apenas nas seguintes circunstâncias:</p>
          <ul>
            <li>Com processadores de pagamento seguros para transações financeiras.</li>
            <li>Com prestadores de serviços terceirizados que auxiliam na operação da plataforma (ex: hospedagem, análise de dados).</li>
            <li>Em resposta a ordens judiciais ou solicitações de autoridades competentes.</li>
            <li>Em caso de fusão, aquisição ou venda de ativos da empresa.</li>
          </ul>

          <p><strong>5. SEGURANÇA DAS INFORMAÇÕES</strong></p>
          <p>Implementamos medidas de segurança robustas para proteger seus dados:</p>
          <ul>
            <li>Criptografia de dados sensíveis (senhas, informações de pagamento).</li>
            <li>Firewalls e sistemas de detecção de intrusões.</li>
            <li>Acesso restrito a informações pessoais.</li>
            <li>Auditorias de segurança regulares.</li>
          </ul>

          <p><strong>6. DIREITOS DOS USUÁRIOS</strong></p>
          <p>Você tem os seguintes direitos:</p>
          <ul>
            <li>Acessar e obter cópia de seus dados pessoais.</li>
            <li>Corrigir dados incorretos ou incompletos.</li>
            <li>Excluir seus dados (em determinadas circunstâncias).</li>
            <li>Solicitar a portabilidade de seus dados.</li>
            <li>Revogar o consentimento para o uso de seus dados.</li>
            <li>Opor-se ao processamento de seus dados para marketing direto.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
            <li>Solicitar informações sobre o compartilhamento de seus dados.</li>
          </ul>

          <p><strong>7. ARMAZENAMENTO DOS DADOS</strong></p>
          <p>Os dados são armazenados pelo tempo necessário para cumprir as finalidades desta Política, ou conforme exigido por lei.</p>

          <p><strong>8. COOKIES E TECNOLOGIAS SEMELHANTES</strong></p>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Melhorar a navegação e a experiência do usuário.</li>
            <li>Analisar o tráfego e o uso da plataforma.</li>
            <li>Personalizar conteúdo e anúncios.</li>
            <li>Rastrear o uso de promoções.</li>
          </ul>
          <p>Você pode gerenciar as preferências de cookies nas configurações do seu navegador.</p>

          <p><strong>9. ALTERAÇÕES NA POLÍTICA</strong></p>
          <p>Esta Política pode ser atualizada periodicamente. Notificaremos os usuários sobre mudanças significativas por e-mail ou através da plataforma.</p>

          <p><strong>10. CONTATO</strong></p>
          <p>Em caso de dúvidas ou solicitações, entre em contato com nosso suporte: CodeGlam@gmail.com.</p>

          <p><strong>11. LGPD (Lei Geral de Proteção de Dados)</strong></p>
          <p>Nós da CodeGlam estamos adequados com a LGPD, e nos comprometemos a manter todos os dados de nossos clientes em segurança, e a usa-los somente para as finalidades aqui descritas.</p>

          <p>Você pode consultar nossos <Link to="/terms-of-use">Termos de Uso</Link> para mais informações.</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;