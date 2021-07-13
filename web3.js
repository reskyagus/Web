const http = require("http");
const url = require("url");
const server = http.createServer((request, response) => {
    const parsedURL = url.parse(request.url,true);
    console.log(parsedURL);
 
   if (parsedURL.pathname === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(`<center><h1> Data Mahasiswa </h1></center>`)
      response.write(`
      <ol><table border="1" >
      <th bgcolor="#8B0000" colspan="2"><h2>Data mahasiswa</h2></th>
      <tr>
      <td>
      <a href="profil?nama=Muhammad Yusuf&nim=105841100119&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Gowa&alamat=-&agama=Islam">Muhammad Yusuf</a>
      </td>
      <td><a href="profil?nama=Andi Muharram&nim=105841100719&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Wajo&alamat=-&agama=Islam">Andi Muharram</a></td>
      </tr>
      <tr>
      <td>
      <a href="profil?nama=Rahmad Abdullah&nim=105841100319&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Makassar&alamat=-&agama=Islam">Rahmad Abdullah</a>
      </td>
      <td>
      <a href="profil?nama=Hasbullah Husain&nim=105841100819&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Makassar&alamat=-&agama=Islam&">Hasbullah Husain</a>
      </td>
      </tr>
      <tr>
      <td>
      <a href="profil?nama=Arjun A&nim=105841100519&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Barru&alamat=BTN Agraria&agama=Islam">Arjun A</a>
      </td>
      <td>
      <a href="profil?nama=Suriani&nim=105841100319&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=perempuan&asal=Pangkep&alamat=Alauddin&agama=Islam&">Suriani</a>
      </td>
      </tr>
      <tr>
      <td>
      <a href="profil?nama=Ahmad Husain&nim=105841100919&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Makassar&alamat=-&agama=Islam">Ahmad Husain</a>
      </td>
      <td>
      <a href="profil?nama=Andi Anugrah&nim=105841100619&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Wajo&alamat=-&agama=Islam">Andi Anugrah</a>
      </td>
      </tr>
      <tr>
      <td>
      <a href="profil?nama=Nurul Awaliyah&nim=105841101019&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Perempuan&asal=-&alamat=Talasalapang&agama=Islam&">Nurul Awaliyah</a>
      </td>
      <td>
      <a href="profil?nama=Andi Muh Rizaldy&nim=105841101119&Fakultas=Teknik&kelas=4A&jurusan=Informatika&jk=Laki Laki&asal=Makassar&alamat=Antang&agama=Islam&">Andi Muh Rizaldy</a>
      </td>
      </tr>
      </table></ol>`);
      response.end();
  }else if (parsedURL.pathname === '/profil') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(`
      <body>
  <h1 align="center">BIODATA MAHASISWA</h1>
<table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
<tr align="center" bgcolor="#8B0000">
<td width="232">FOTO</td>
<td width="174">DATA DIRI</td>
<td width="353">KETERANGAN</td>
</tr>
<tr bgcolor="#F0F8FF">
<td rowspan="10" align="center"><img src="https://simak.unismuh.ac.id/upload/mahasiswa/${parsedURL.query.nim}.jpg"></td>
<td>Nama</td>
<td>${parsedURL.query.nama}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>NIM</td>
<td>${parsedURL.query.nim}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Kelas</td>
<td>${parsedURL.query.kelas}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Fakultas</td>
<td>${parsedURL.query.Fakultas}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Jurusan</td>
<td>${parsedURL.query.jurusan}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Agama</td>
<td>${parsedURL.query.agama}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Jenis Kelamin</td>
<td>${parsedURL.query.jk}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Alamat</td>
<td>${parsedURL.query.alamat}</td>
</tr>
<tr bgcolor="#F0F8FF">
<td>Daerah Asal</td>
<td>${parsedURL.query.asal}</td>
</tr>
</table>
 `);
      response.end();
  }else {
   response.statusCode = 404;
   response.setHeader('Content-Type', 'text/html');
   response.write('halaman tdk di temukan');
   response.end();
  }
});

server.listen(4013, () => {
    // Console will print the message
    console.log('sever listen http://152.67.114.190:4013');
 });
