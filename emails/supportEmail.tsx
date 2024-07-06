import {
  Column,
  Hr,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import moment from 'moment';
import { EmailLayoutWithoutFooter } from './utils/EmailLayoutWithoutFooter';

type SupportEmailProps = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

const SupportEmail = ({ content, email, name, subject }: SupportEmailProps) => {
  return (
    <EmailLayoutWithoutFooter>
      <Preview>Support Request From {email}</Preview>
      <Section>
        <Row>
          <Column>
            <Text className="font-bold text-base">Name : {name}</Text>
          </Column>
          <Column>
            <Text className="font-bold text-base">Email : {email}</Text>
          </Column>
        </Row>
        <Row>
          <Text>{moment().format('yyyy, MMM - DD HH:mm')}</Text>
        </Row>
      </Section>
      <h1>Subject : {subject}</h1>
      <Hr />
      <Text>{content}</Text>
    </EmailLayoutWithoutFooter>
  );
};

export default SupportEmail;
