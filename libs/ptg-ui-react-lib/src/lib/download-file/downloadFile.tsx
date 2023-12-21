/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for download file
 *
 */
import { useRef, useState } from 'react';
import './downloadFile.scss';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ExportToCsv } from 'export-to-csv';
import { PtgUiSelect } from '../select/select';

interface PtgUiDownloadFileProps {
  columns?: any;
  dataToDownload?: any;
  allowFileTypes?: any;
}

const defaultProps: any = {
  allowFileTypes: ['PDF', 'EXCEL', 'JPG', 'WORD'],
};

const PtgUiDownload = ({
  columns,
  dataToDownload,
  allowFileTypes,
}: PtgUiDownloadFileProps) => {
  const [selecteType, setSelectedType] = useState('');
  const head = columns;
  const tableEl = useRef<any>(null);
  const data = dataToDownload;
  console.log('coll', columns);
  const fileTypeObj: any = {
    PDF: 'Download PDF',
    EXCEL: 'Download Excel',
    JPG: 'Download JPG',
    WORD: 'Download Word',
  };

  const newAllowTypes = allowFileTypes.map((item: any, index: any) => {
    return { label: item, value: item };
  });

  const onSelectHandle = (fileType: any) => {
    const value = fileType.target.value.toUpperCase();
    setSelectedType(value);
  };

  const download = () => {
    switch (selecteType) {
      case 'EXCEL':
        downloadExcel(data);
        break;
      case 'JPG':
      case 'JPEG':
        image();

        break;
      case 'WORD':
        downloadWordFile();
        break;
      case 'PDF':
        downloadPdfFile();
        break;

      default:
        break;
    }
  };

  const downloadExcel = (data: any) => {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: false,
      headers: head,
    };
    const csvExporter = new ExportToCsv();
    csvExporter.generateCsv([head, ...data]);
  };

  const generateBlob = (data: any, type: any) => {
    return new Blob([data], { type });
  };

  const getElementAndAsignBlob = (blob: any, fileName: any) => {
    const element: any = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.download = fileName;
    element.click();
  };

  const downloadWordFile = () => {
    const blob = generateBlob(createTable(), 'application/msword');
    getElementAndAsignBlob(blob, 'word.doc');
  };

  const createTable = () => {
    const table: any = tableEl;

    return table.current.outerHTML;
  };
  /* istanbul ignore next */
  const image = async () => {
    const element = tableEl.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  /* istanbul ignore next */
  const downloadPdfFile: any = async () => {
    const element = tableEl.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    // const pdf = new jsPDF("p", "mm");
    // const imgProperties = pdf.getImageProperties(data);

    // var width = pdf.internal.pageSize.getWidth();
    // var height = pdf.internal.pageSize.getHeight();
    // pdf.addImage(data, 'PNG', 0, 0, width, height);
    // pdf.save('print.pdf');

    const fileWidth = 208;
    const fileHeight = (canvas.height * fileWidth) / canvas.width;
    const PDF = new jsPDF('p', 'mm', 'a4');
    const position = 0;
    PDF.addImage(data, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('example.pdf');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex mb-3 justify-content-md-end">
            <div className="w-50">
              <PtgUiSelect
                className={'w-100'}
                id={'download'}
                name="download"
                value={selecteType}
                onChange={onSelectHandle}
                list={newAllowTypes}
              />
            </div>

            <div className="ms-2 mr-7">
              <button
                onClick={download}
                className="btn btn-primary"
                disabled={selecteType === '' ? true : false}
                data-testid="downloadbutton"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 mb-3 col-sm-12 col-xs-12">
          <div className="table-responsive">
            <table
              ref={tableEl}
              className="table table-bordered"
              data-testid="table"
            >
              <thead>
                <tr>
                  {head.map((col: any, index: any) => {
                    console.log('col:', col);
                    return <th key={`tableHeader_` + index}>{col}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((ele: any, index: any) => {
                  return (
                    <tr key={`downloadFile_${index}`}>
                      {ele.map((value: any, valueIndex: any) => {
                        return (
                          <td key={`dataValue_` + valueIndex}> {value} </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

PtgUiDownload.defaultProps = defaultProps;
export default PtgUiDownload;
