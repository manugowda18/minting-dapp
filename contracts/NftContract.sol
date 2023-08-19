// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoboatNft is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerwallet;
    bool public publicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;

    mapping(address => uint256) public walletMints;

    constructor() payable ERC721("Robot", "RN") {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerwallet = 3;
        //set withdraw address
    }

    function setIsPublicMintEnabled(
        bool IsPublicMintEnabled_
    ) external onlyOwner {
        publicMintEnabled = IsPublicMintEnabled_;
    }

    function setBaseUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokrnURI(uint256 tokenId_) public view returns (string memory) {
        require(_exists(tokenId_), "Token does not exist!");
        return
            string(
                abi.encodePacked(
                    baseTokenUri,
                    Strings.toString(tokenId_),
                    ".json"
                )
            );
    }

    function withdraw() external onlyOwner {
        (bool sucess, ) = withdrawWallet.call{value: address(this).balance}("");
        require(sucess, "withdrw failed");
    }

    function mint(uint256 quantity_) public payable {
        require(publicMintEnabled, "minting is not enabled");
        require(msg.value == quantity_ * mintPrice, "Wrong Mint");
        require(totalSupply + quantity_ <= maxSupply, "sold out");
        require(
            walletMints[msg.sender] + quantity_ <= maxPerwallet,
            "Mint Is Exceeded"
        );

        for(uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}
