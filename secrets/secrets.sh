echo "apiVersion: v1" >> secrets.yaml
echo "kind: Secret" >> secrets.yaml
echo "metadata:" >> secrets.yaml
  echo "  name: secretvar" >> secrets.yaml
echo "type: Opaque" >> secrets.yaml
echo "stringData:" >> secrets.yaml
    echo "    DOCKER_USERNAME: '${DOCKER_USERNAME}'" >> secrets.yaml
    echo "    db_username: '${db_username}'" >> secrets.yaml
    echo "    password: '${password}'" >> secrets.yaml
    echo "    testdb_username: '${testdb_username}'" >> secrets.yaml
    echo "    testdb_endpoint: '${testdb_endpoint}'" >> secrets.yaml
    echo "    db_endpoint: '${db_endpoint}'" >> secrets.yaml

