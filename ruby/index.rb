def mapfun(callback, *data)
    data.map { |item| mapfun_recursive(callback, item) }
  end
  
  def mapfun_recursive(callback, value)
    if value.is_a?(Array)
      value.map { |v| mapfun_recursive(callback, v) }
    elsif value.is_a?(Hash)
      cloned_hash = value.clone
      cloned_hash.each do |key, val|
        cloned_hash[key] = mapfun_recursive(callback, val)
      end
      cloned_hash
    elsif value.is_a?(Numeric)
      callback.call(value.to_f)
    else
      value
    end
  end
  
  
  

  