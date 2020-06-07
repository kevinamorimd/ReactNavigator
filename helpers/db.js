import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("usuarios.db");

export const buscarUsuarios = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tb_usuario;',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirUsuario = (nome, telefone, imagemURI) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO tb_usuario (nome, telefone, imagemURI) values (?, ?, ?);',
                [nome, telefone, imagemURI],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        })
    })
    return promise;
}

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS tb_usuario (id INTEGER PRIMARY KEY, nome TEXT, telefone TEXT, imagemURI TEXT);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}