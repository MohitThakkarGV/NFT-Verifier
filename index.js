const { Alchemy, Network } = require("alchemy-sdk");
const settings = {
  apiKey: "CW7UmedrRhUUv4AZYxzAzDg_DQBBhR_p",
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(settings);
async function goaOn() {
  const contractAddress = "0x50020f71cafbe11fbe1062dbcd082dca55114447";
  const nfts = await alchemy.nft.getNftsForOwner(
    "0x111423FA917A010A4f62c9B2742708744B4CbFc4"
  );

  console.log(nfts.ownedNfts[2].description + " " + nfts.ownedNfts[2].title);
  console.log("NFT Contract Address:- " + contractAddress);
  for (i = 0; i < nfts.ownedNfts.length; i++) {
    if (nfts.ownedNfts[i].contract.address == contractAddress) {
      console.log("You are eligible to attend Web3Conf in Goa...LFG");
    }
  }
}
goaOn();
