import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from './components/ui/select';

export default function KlassenChallengeForm() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Workshop Buchung</h1>
      <Card className="mb-8">
        <CardContent className="grid gap-4 p-6">
          <div>
            <Label>Schulkennzahl</Label>
            <Input placeholder="z. B. 123456" />
          </div>
          <div>
            <Label>Adresse der Schule</Label>
            <Input placeholder="Straße, PLZ Ort" />
          </div>
          <div>
            <Label>Schultitel</Label>
            <Input placeholder="z. B. Volksschule Mustergasse" />
          </div>
          <div>
            <Label>Primär-Schulart</Label>
            <Input placeholder="z. B. Volksschule" />
          </div>
          <div>
            <Label>PLZ der Schule</Label>
            <Input placeholder="z. B. 1230" />
          </div>
          <div>
            <Label>Telefonnummer der Schule</Label>
            <Input placeholder="z. B. 01 123 4567" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Vorname der Lehrperson</Label>
              <Input />
            </div>
            <div>
              <Label>Nachname der Lehrperson</Label>
              <Input />
            </div>
          </div>
          <div>
            <Label>Emailadresse der Lehrperson</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>Telefonnummer der Lehrperson</Label>
            <Input />
          </div>
          <div>
            <Label>Klasse</Label>
            <Input placeholder="z. B. 3B" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Anzahl Schüler:innen</Label>
              <Input type="number" min="1" />
            </div>
            <div>
              <Label>Anzahl Pädagog:innen</Label>
              <Input type="number" min="0" />
            </div>
          </div>
          <div>
            <Label>Workshop</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Workshop wählen" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="gemeinsam-stark">Gemeinsam stark</SelectItem>
                <SelectItem value="hip-hop-dance">Hip Hop Dance</SelectItem>
                <SelectItem value="street-racket">Street Racket</SelectItem>
                <SelectItem value="sportmix">Sportmix</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Ort</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Ort wählen" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="schule">In der Schule</SelectItem>
                <SelectItem value="alpha-academy">Alpha Academy C</SelectItem>
                <SelectItem value="ksv-siemens">KSV Siemens</SelectItem>
                <SelectItem value="soccer-center">Soccer Center</SelectItem>
                <SelectItem value="ftv1865">FTV 1865</SelectItem>
                <SelectItem value="tennispoint">Tennis Point Vienna</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Trainer:in</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Trainer:in wählen" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="simon">Simon</SelectItem>
                <SelectItem value="lisa">Lisa</SelectItem>
                <SelectItem value="markus">Markus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Datum</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Uhrzeit</Label>
            <Input disabled value="09:00 – 12:00 Uhr" />
          </div>
          <div>
            <Label>Hinweise zum Treffpunkt</Label>
            <Textarea placeholder="z. B. Eingang links bei der Turnhalle..." />
          </div>
          <Button>Buchung absenden</Button>
        </CardContent>
      </Card>
    </div>
  );
}