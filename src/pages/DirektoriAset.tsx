import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import Header from "../components/Header";
import { dummyAssets } from "../dummy-data";

const DirektoriAset = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <h1>Direktori Aset</h1>
        <CardAsset assets={dummyAssets} />
      </ContentContainer>
    </>
  );
};

export default DirektoriAset;
