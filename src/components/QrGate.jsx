import React from "react";
import { QRCodeSVG } from "qrcode.react";

const menuUrl = `${window.location.origin}/menu`;

export default function QrGate() {
  return (
    <main className="qr-gate">
      <div className="qr-brand" aria-hidden="true">S<br />F</div>
      <span>SAI FOOD HUB</span>
      <h1>Scan to view the menu</h1>
      <p>Point your phone camera at the QR code to open our latest menu.</p>
      <div className="qr-code">
        <QRCodeSVG
          value={menuUrl}
          size={248}
          level="H"
          marginSize={2}
          title="QR code to open the Sai Food Hub menu"
        />
      </div>
    </main>
  );
}
