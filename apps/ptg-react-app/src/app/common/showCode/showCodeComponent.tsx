import { Tabs, Tab } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './showCodeComponent.scss';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export interface ShowCodeComponentProps {
    componentCode : string,
    htmlCode : string,
    cssCode? : string,
}

export function ShowCodeComponent(props: ShowCodeComponentProps) {
  return (
    <section>
      <div className="container-fluid">
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
          <Tabs defaultActiveKey="example1" className="draganddropmain w-100">
         
          <Tab eventKey="example1" title="TypeScript">
            <div className="copy-code-with-highlighter">

            <CopyToClipboard text={props.componentCode} className="copy-to-clipboard">
              <ContentCopyIcon fontSize="small"/>
            </CopyToClipboard>

            <SyntaxHighlighter language="javascript" style={dark} className="syntax-highlighter">
              {props.componentCode}
            </SyntaxHighlighter>
             </div>

          </Tab>
          
          <Tab eventKey="example2" title="HTML">
            <div className="copy-code-with-highlighter">

            <CopyToClipboard text={props.htmlCode} className="copy-to-clipboard">
            <ContentCopyIcon fontSize="small"/>
            </CopyToClipboard>
          
            <SyntaxHighlighter language="javascript" style={dark} className="syntax-highlighter">
              {props.htmlCode}
            </SyntaxHighlighter>

            </div>
          </Tab>

          {props.cssCode && 
            <Tab eventKey="example3" title="CSS">
              <div className="copy-code-with-highlighter">

              <CopyToClipboard text={props.cssCode} className="copy-to-clipboard">
              <ContentCopyIcon fontSize="small"/>
              </CopyToClipboard>
           
              <SyntaxHighlighter language="javascript" style={dark} className="syntax-highlighter">
                {props.cssCode}
              </SyntaxHighlighter>
              
              </div>
            </Tab>
          }
        </Tabs>
        </div>
      </div>
    </section>
  );
}

export default ShowCodeComponent;
